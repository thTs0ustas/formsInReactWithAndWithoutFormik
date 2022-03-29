import React from "react";
import SocialIcons from "./SocialIcon";

export default function Menu() {
  return (
    <div class="menu">
      <div class="col">
        <div class="title">Films</div>
        <ul>
          <li>
            <a href="#">Now Showing</a>
          </li>
          <li>
            <a href="#">Coming soon</a>
          </li>
          <li>
            <a href="#">Cameo at home</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Events</div>
        <ul>
          <li>
            <a href="#">All Events</a>
          </li>
          <li>
            <a href="#">CHIFF</a>
          </li>
          <li>
            <a href="#">JIFF 2019</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Membership</div>
        <ul>
          <li>
            <a href="#">Movie Club Log In</a>
          </li>
          <li>
            <a href="#">Membership Options</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Member FAQs</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Cinema info</div>
        <ul>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Food & Drink</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Cinema Hire</a>
          </li>
          <li>
            <a href="#">Ticket Prices</a>
          </li>
          <li>
            <a href="#">Explore Belgrave</a>
          </li>
          <li>
            <a href="#">Moving Story Entertainment</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Extras</div>
        <ul>
          <li>
            <a href="#">Gifts</a>
          </li>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Work at Cameo</a>
          </li>
          <li>
            <a href="#">Download the App</a>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="title">Contact us</div>
        <ul>
          <li>
            <a href="#">(03) 9754 7844</a>
          </li>
          <li>
            <a href="#">Email Us</a>
          </li>
        </ul>
        <SocialIcons />
      </div>
    </div>
  );
}
