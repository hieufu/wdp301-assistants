import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { productService } from '../services/authService';
import LoadingSpinner from '../components/LoadingSpinner';

const Products = () => {
  const [filters, setFilters] = useState({
    category: '',
    search: '',
    minPrice: '',
    maxPrice: ''
  });
  
  const { data, isLoading, error } = useQuery(
    ['products', filters],
    () => productService.getProducts(filters),
    {
      keepPreviousData: true
    }
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      search: '',
      minPrice: '',
      maxPrice: ''
    });
  };

  if (isLoading) return <LoadingSpinner message="Loading products..." />;
  
  if (error) {
    return (
      <Container>
        <div className="text-center mt-5">
          <h3 className="text-danger">Error loading products</h3>
          <p>{error.message}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h2>Products</h2>
          <p className="text-muted">
            Browse our collection of products. Use the filters below to find what you're looking for.
          </p>
        </Col>
      </Row>

      {/* Filters */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Filters</h5>
          <Row>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                  <option value="home">Home</option>
                  <option value="sports">Sports</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group>
                <Form.Label>Min Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group>
                <Form.Label>Max Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1000"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </Form.Group>
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <Button variant="outline-secondary" onClick={clearFilters}>
                Clear Filters
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Products Grid */}
      <Row>
        <Col className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-muted mb-0">
              {data?.count || 0} products found
            </p>
            {data?.pagination && (
              <p className="text-muted mb-0">
                Page {data.pagination.page} of {data.pagination.pages}
              </p>
            )}
          </div>
        </Col>
      </Row>

      {data?.data?.length === 0 ? (
        <Row>
          <Col className="text-center py-5">
            <h4>No products found</h4>
            <p className="text-muted">Try adjusting your filters or search terms.</p>
          </Col>
        </Row>
      ) : (
        <Row>
          {data?.data?.map((product) => (
            <Col key={product._id} md={4} lg={3} className="mb-4">
              <Card className="product-card h-100">
                {product.images?.[0] ? (
                  <Card.Img
                    variant="top"
                    src={product.images[0].url}
                    alt={product.images[0].alt || product.name}
                    className="product-image"
                  />
                ) : (
                  <div className="product-image bg-light d-flex align-items-center justify-content-center">
                    <span className="text-muted">No Image</span>
                  </div>
                )}
                <Card.Body className="d-flex flex-column">
                  <div className="flex-grow-1">
                    <Card.Title className="h6">{product.name}</Card.Title>
                    <Card.Text className="text-muted small">
                      {product.description.substring(0, 100)}
                      {product.description.length > 100 && '...'}
                    </Card.Text>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="h5 mb-0 text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <Badge bg={product.isAvailable ? 'success' : 'danger'}>
                        {product.isAvailable ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted text-capitalize">
                        {product.category}
                      </small>
                      <Link to={`/products/${product._id}`}>
                        <Button variant="outline-primary" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;