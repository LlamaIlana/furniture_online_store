import Delivery from "../img/delivery.jpg";
import Collection from "../img/collect.jpg";
import Info from "../img/info.png";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Shipping.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyVerticallyCenteredModal from "./CollectOrderDisplay";
import AddressForm from "./AddressForm";

export default function Shipping() {
  const [modalShow, setModalShow] = useState(false); 
  const [infoModalShow, setInfoModalShow] = useState(false); // Added state for Info modal
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve the total price from localStorage
    const storedTotalPrice = localStorage.getItem("totalprice");
    if (storedTotalPrice) {
      setTotalPrice(Number(storedTotalPrice));
    }
  }, []);

  return (
    <div className="delivery">
      <div>
        <div className="back-to-cart">
          <h2>Delivery</h2>
          <button className="ship-btn" onClick={() => navigate("/cart")}>
            Back to Cart
          </button>
        </div>
        <div className="delivery-container">
          <img className="delivery-img" src={Delivery} alt="Delivery" />
          <p>Delivery</p>
          <p>Courier delivery to your door</p>
          <button className="ship-btn" onClick={() => navigate("/address")}>
            Deliver my Order
          </button>
          {/* Info button to open the Info modal */}
          <Button className="button-info" onClick={() => setInfoModalShow(true)}>
            <img src={Info} alt="info" className="info-img"/>
          </Button>

          {/* Modal component for info */}
          <Modal
            show={infoModalShow}
            onHide={() => setInfoModalShow(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Deliver Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You can collect your order in person at BloomingBliss Events, located at 123 Creative Avenue, Cape Town, during office hours: Monday to Friday, 9:00 AM - 5:00 PM, and Saturday, 10:00 AM - 2:00 PM. Please bring a valid ID and receive a confirmation email or SMS when your order is ready. Our staff will assist you at the reception desk, and parking is available on-site.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setInfoModalShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="collect-container">
          <img className="collect-img" src={Collection} alt="Collection" />
          <p>Collect</p>
          <p>Collect my order from your shop located in Cape Town CBD.</p>
          <Button className="ship-btn" onClick={() => setModalShow(true)}>
            Collect my Order
          </Button>

          {/* Info button to open the Info modal */}
          <Button className="button-info" onClick={() => setInfoModalShow(true)}>
            <img src={Info} alt="info" className="info-img"/>
          </Button>

          {/* Modal component for info */}
          <Modal
            show={infoModalShow}
            onHide={() => setInfoModalShow(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Collection Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You can collect your order in person at BloomingBliss Events, located at 123 Creative Avenue, Cape Town, during office hours: Monday to Friday, 9:00 AM - 5:00 PM, and Saturday, 10:00 AM - 2:00 PM. Please bring a valid ID and receive a confirmation email or SMS when your order is ready. Our staff will assist you at the reception desk, and parking is available on-site.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setInfoModalShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="summary-section">
        <p>Cart Summary:</p>
        <p>Total Price: R{totalPrice.toFixed(2)}</p>
      </div>

      {/* Modal component for collect order */}
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
