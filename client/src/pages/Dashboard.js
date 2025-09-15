import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';
import { productService } from '../services/authService';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Fetch user's products
  const { data: productsData, isLoading: productsLoading } = useQuery(
    'userProducts',
    () => productService.getProducts(),
    {
      select: (data) => ({
        ...data,
        data: data.data.filter(product => product.createdBy._id === user.id)
      })
    }
  );

  // Create product mutation
  const createProductMutation = useMutation(productService.createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('userProducts');
      toast.success('Product created successfully!');
      setShowModal(false);
      reset();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to create product');
    }
  });

  // Update product mutation
  const updateProductMutation = useMutation(
    ({ id, data }) => productService.updateProduct(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userProducts');
        toast.success('Product updated successfully!');
        setShowModal(false);
        setEditingProduct(null);
        reset();
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || 'Failed to update product');
      }
    }
  );

  // Delete product mutation
  const deleteProductMutation = useMutation(productService.deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('userProducts');
      toast.success('Product deleted successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete product');
    }
  });

  const handleCreateProduct = () => {
    setEditingProduct(null);
    reset();
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    reset({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      tags: product.tags.join(', ')
    });
    setShowModal(true);
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProductMutation.mutate(productId);
    }
  };

  const onSubmit = (data) => {
    const productData = {
      ...data,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
      tags: data.tags ? data.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    };

    if (editingProduct) {
      updateProductMutation.mutate({ id: editingProduct._id, data: productData });
    } else {
      createProductMutation.mutate(productData);
    }
  };

  if (productsLoading) return <LoadingSpinner message="Loading dashboard..." />;

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2>Dashboard</h2>
              <p className="text-muted">Welcome back, {user?.firstName}!</p>
            </div>
            <Button variant="primary" onClick={handleCreateProduct}>
              Add New Product
            </Button>
          </div>
        </Col>
      </Row>

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-primary">{productsData?.data?.length || 0}</h3>
              <p className="text-muted mb-0">Total Products</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-success">
                {productsData?.data?.filter(p => p.isAvailable).length || 0}
              </h3>
              <p className="text-muted mb-0">Available Products</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-warning">
                {productsData?.data?.filter(p => p.stock < 5).length || 0}
              </h3>
              <p className="text-muted mb-0">Low Stock</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-info">
                $
                {productsData?.data
                  ?.reduce((total, product) => total + product.price * product.stock, 0)
                  ?.toFixed(2) || '0.00'
                }
              </h3>
              <p className="text-muted mb-0">Total Value</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Products Table */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Your Products</h5>
        </Card.Header>
        <Card.Body>
          {productsData?.data?.length === 0 ? (
            <div className="text-center py-4">
              <h5>No products yet</h5>
              <p className="text-muted">Create your first product to get started!</p>
              <Button variant="primary" onClick={handleCreateProduct}>
                Add Your First Product
              </Button>
            </div>
          ) : (
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productsData?.data?.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <div>
                        <strong>{product.name}</strong>
                        <br />
                        <small className="text-muted">
                          {product.description.substring(0, 50)}...
                        </small>
                      </div>
                    </td>
                    <td className="text-capitalize">{product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <span className={product.stock < 5 ? 'text-warning' : ''}>
                        {product.stock}
                      </span>
                    </td>
                    <td>
                      <span className={`badge bg-${product.isAvailable ? 'success' : 'danger'}`}>
                        {product.isAvailable ? 'Available' : 'Out of Stock'}
                      </span>
                    </td>
                    <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEditProduct(product)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDeleteProduct(product._id)}
                          disabled={deleteProductMutation.isLoading}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingProduct ? 'Edit Product' : 'Create New Product'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('name', {
                      required: 'Product name is required',
                      maxLength: {
                        value: 100,
                        message: 'Name cannot exceed 100 characters'
                      }
                    })}
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    {...register('category', { required: 'Category is required' })}
                    isInvalid={errors.category}
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home">Home</option>
                    <option value="sports">Sports</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.category?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register('description', {
                  required: 'Description is required',
                  maxLength: {
                    value: 1000,
                    message: 'Description cannot exceed 1000 characters'
                  }
                })}
                isInvalid={errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    min="0"
                    {...register('price', {
                      required: 'Price is required',
                      min: { value: 0, message: 'Price cannot be negative' }
                    })}
                    isInvalid={errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    {...register('stock', {
                      required: 'Stock quantity is required',
                      min: { value: 0, message: 'Stock cannot be negative' }
                    })}
                    isInvalid={errors.stock}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.stock?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Tags (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., trending, sale, featured"
                {...register('tags')}
              />
              <Form.Text className="text-muted">
                Optional tags to help categorize your product
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={createProductMutation.isLoading || updateProductMutation.isLoading}
            >
              {createProductMutation.isLoading || updateProductMutation.isLoading
                ? 'Saving...'
                : editingProduct
                ? 'Update Product'
                : 'Create Product'
              }
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Dashboard;