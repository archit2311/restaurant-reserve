import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Link id="link" to="/lunch">
            <div id="lunch" >
                <h1 id="ourstory">Lunch</h1>
                </div>
            </Link>
                
          </motion.div>
        </Col>
        <Col>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
             <Link id="link" to="/dinner">
            <div id="dinner" >
                <h1 id="ourstory">Dinner</h1>
                </div>
            </Link>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;