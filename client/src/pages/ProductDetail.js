import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { productService } from '../services/authService';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetail = () => {
  const { id } = useParams();
  
  const { data, isLoading, error } = useQuery(
    ['product', id],
    () => productService.getProduct(id)
  );

  if (isLoading) return <LoadingSpinner message="Loading product details..." />;
  
  if (error) {
    return (
      <Container>
        <Alert variant="danger" className="mt-4">
          <h4>Product Not Found</h4>
          <p>{error.response?.data?.message || 'The product you are looking for does not exist.'}</p>
          <Link to="/products">
            <Button variant="outline-primary">Back to Products</Button>
          </Link>
        </Alert>
      </Container>
    );
  }

  const product = data?.data;

  return (
    <Container className="py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product?.name}
          </li>
        </ol>
      </nav>

      <Row>
        <Col lg={6}>
          {product?.images?.[0] ? (
            <img
              src={product.images[0].url}
              alt={product.images[0].alt || product.name}
              className="img-fluid rounded"
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          ) : (
            <div
              className="bg-light d-flex align-items-center justify-content-center rounded"
              style={{ height: '400px' }}
            >
              <span className="text-muted h4">No Image Available</span>
            </div>
          )}
          
          {/* Additional Images */}
          {product?.images?.length > 1 && (
            <Row className="mt-3">
              {product.images.slice(1, 5).map((image, index) => (
                <Col key={index} xs={3}>
                  <img
                    src={image.url}
                    alt={image.alt || `${product.name} ${index + 2}`}
                    className="img-fluid rounded"
                    style={{ height: '100px', width: '100%', objectFit: 'cover' }}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
        
        <Col lg={6}>
          <div className="ps-lg-4">
            <h1 className="h2 mb-3">{product?.name}</h1>
            
            <div className="mb-3">
              <Badge bg="primary" className="me-2 text-capitalize">
                {product?.category}
              </Badge>
              <Badge bg={product?.isAvailable ? 'success' : 'danger'}>
                {product?.isAvailable ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>
            
            <div className="mb-4">
              <span className="h3 text-primary">${product?.price?.toFixed(2)}</span>
            </div>
            
            <div className="mb-4">
              <h5>Description</h5>
              <p className="text-muted">{product?.description}</p>
            </div>
            
            {product?.tags?.length > 0 && (
              <div className="mb-4">
                <h6>Tags</h6>
                <div>
                  {product.tags.map((tag, index) => (
                    <Badge key={index} bg="light" text="dark" className="me-2 mb-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <Row>
                <Col sm={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="text-center py-3">
                      <h6 className="mb-1">Stock Quantity</h6>
                      <span className="h5 text-primary">{product?.stock}</span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className="border-0 bg-light">
                    <Card.Body className="text-center py-3">
                      <h6 className="mb-1">Created By</h6>
                      <span className="text-muted">
                        {product?.createdBy?.firstName} {product?.createdBy?.lastName}
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                variant="primary"
                size="lg"
                disabled={!product?.isAvailable}
                className="me-md-2"
              >
                {product?.isAvailable ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button variant="outline-secondary" size="lg">
                Add to Wishlist
              </Button>
            </div>
            
            <div className="mt-4">
              <small className="text-muted">
                Product ID: {product?._id}
                <br />
                Created: {new Date(product?.createdAt).toLocaleDateString()}
                {product?.updatedAt !== product?.createdAt && (
                  <>
                    <br />
                    Last Updated: {new Date(product?.updatedAt).toLocaleDateString()}
                  </>
                )}
              </small>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Related Products or Additional Information Section */}
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Product Information</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Specifications</h6>
                  <ul className="list-unstyled">
                    <li><strong>Category:</strong> {product?.category}</li>
                    <li><strong>Stock:</strong> {product?.stock} units</li>
                    <li><strong>Status:</strong> {product?.isActive ? 'Active' : 'Inactive'}</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>Seller Information</h6>
                  <ul className="list-unstyled">
                    <li><strong>Seller:</strong> {product?.createdBy?.firstName} {product?.createdBy?.lastName}</li>
                    <li><strong>Username:</strong> @{product?.createdBy?.username}</li>
                    <li><strong>Listed:</strong> {new Date(product?.createdAt).toLocaleDateString()}</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;