"use client";

import cod_icon from "../../../public/assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { CartState, ICartItem, useCartStore } from "../Store/CartStore";
import SummaryItem from "./Components/SummaryItem";
import { calculateGrandTotal, calculateVAT } from "../Utilities/checkoutCalc";
import { PAYMENT_METHOD } from "../Types/Enums";
import {
  ADDRESS_LENGTH_MAX,
  EMAIL_LENGTH_MAX,
  EMONEYNUMBER_LENGTH_MAX,
  EMONEYPIN_LENGTH_MAX,
  INPUT_LENGTH_MAX,
  NAME_LENGTH_MAX,
  PHONE_LENGTH_MAX,
  ZIP_LENGTH_MAX,
  isValidAddress,
  isValidCity,
  isValidCountry,
  isValidEmail,
  isValidEmoneyNumber,
  isValidEmoneyPin,
  isValidName,
  isValidPhone,
  isValidZip,
} from "../Utilities/formValidation";
import AcknowledgeDialog from "./Components/AcknowledgeDialog";

export default function CheckoutPage() {
  const SHIPPING_FEE = 50;
  const cartItems = useCartStore((state: CartState) => state.items);
  const totalPrice = useCartStore((state: CartState) => state.totalPrice);

  const [summaryItems, setSummaryItems] = useState<Array<ICartItem>>([]);
  const [totalSummary, setTotalSummary] = useState(0);
  const [payMethod, setPayMethod] = useState<PAYMENT_METHOD>(
    PAYMENT_METHOD.COD
  );
  const numberFormat = new Intl.NumberFormat("en-US");

  // form related states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [emoneyNumber, setEmoneyNumber] = useState("");
  const [emoneyPin, setEmoneyPin] = useState("");

  // acknowledge dialog
  const [isShowAckDialog, setIsShowAckDialog] = useState(false);

  const openAckDialog = () => {
    setIsShowAckDialog(true);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  };

  const hdlClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target && target.id === "ack-overlay") {
      setIsShowAckDialog(false);
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "auto";
    }
  };

  // need to use useEffect since data of cartItems is from localStorage
  useEffect(() => {
    setSummaryItems(cartItems);
    setTotalSummary(totalPrice);
  }, [cartItems, totalPrice]);

  const hdlPayMethodOnClick = (event: ChangeEvent<HTMLInputElement>) => {
    setPayMethod(parseInt(event.target.value));
  };

  const hdlEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const hdlNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const hdlPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const hdlAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const hdlZipChange = (event: ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };

  const hdlCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const hdlCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const hdlEmoneyNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmoneyNumber(event.target.value);
  };

  const hdlEmoneyPinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmoneyPin(event.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-pageBackground">
      <div className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 mt-4 ">
        <span className="text-[15px] text-textPrimary font-medium leading-[25px]">
          Go Back
        </span>
      </div>
      <main
        className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 
                        desktop:flex desktop:flex-row desktop:items-start desktop:gap-x-8"
      >
        <section className="bg-white rounded-lg p-4 mt-4 desktop:w-2/3 desktop:mb-16">
          <h1 className="text-[28px] font-bold tracking-[1px] uppercase">
            Checkout
          </h1>
          <form>
            <div>
              <h2 className="text-accent text-[13px] font-bold tracking-wide leading-[25px] mt-8 uppercase">
                Billing Details
              </h2>
              <div className="tablet:grid tablet:grid-cols-2 tablet:grid-rows-2 tablet:gap-x-4">
                <div className="tablet:col-start-1 row-start-1">
                  <div className="flex flex-row justify-between items-center">
                    <label
                      htmlFor="name"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        name.length === 0 || isValidName(name)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      Name
                    </label>
                    {isValidName(name) !== true && name.length !== 0 && (
                      <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                        Wrong format
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    maxLength={NAME_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                      name.length === 0 || isValidName(name)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    }`}
                    placeholder="Alexei Ward"
                    onChange={hdlNameChange}
                    required
                  />
                </div>
                <div className="tablet:col-start-2 tablet:row-start-1">
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="email"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        email.length === 0 || isValidEmail(email)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      Email Address
                    </label>
                    {isValidEmail(email) !== true && email.length !== 0 && (
                      <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                        Wrong format
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    maxLength={EMAIL_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg  ${
                      email.length === 0 || isValidEmail(email)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    } text-14px font-bold tracking-tight`}
                    placeholder="alexei@mail.com"
                    onChange={hdlEmailChange}
                    required
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="number"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        phone.length === 0 || isValidPhone(phone)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      Phone Number
                    </label>
                    {isValidPhone(phone) !== true && phone.length !== 0 && (
                      <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                        Wrong format
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    maxLength={PHONE_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                      phone.length === 0 || isValidPhone(phone)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    }`}
                    placeholder="+1 202-555-0136"
                    onChange={hdlPhoneChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-accent text-[13px] font-bold tracking-wide leading-[25px] mt-8 uppercase">
                Shipping Info
              </h2>
              <div className="tablet:grid tablet:grid-cols-2 tablet:grid-rows-3 tablet:gap-x-4">
                <div className="tablet:col-span-2">
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="address"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        address.length === 0 || isValidAddress(address)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      Address
                    </label>
                    {isValidAddress(address) !== true &&
                      address.length !== 0 && (
                        <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                          Wrong format
                        </span>
                      )}
                  </div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    maxLength={ADDRESS_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                      address.length === 0 || isValidAddress(address)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    }`}
                    placeholder="1137 Williams Avenue"
                    onChange={hdlAddressChange}
                    required
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="zip"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        zip.length === 0 || isValidZip(zip)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      ZIP
                    </label>
                    {isValidZip(zip) !== true && zip.length !== 0 && (
                      <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                        Wrong format
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    maxLength={ZIP_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                      zip.length === 0 || isValidZip(zip)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    }`}
                    placeholder="10001"
                    onChange={hdlZipChange}
                    required
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="city"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        city.length === 0 || isValidCity(city)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      City
                    </label>
                    {isValidCity(city) !== true && city.length !== 0 && (
                      <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                        Wrong format
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    maxLength={INPUT_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                      city.length === 0 || isValidCity(city)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    }`}
                    placeholder="New York"
                    onChange={hdlCityChange}
                    required
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="country"
                      className={`mt-4 text-[12px] font-bold tracking-tight ${
                        country.length === 0 || isValidCountry(country)
                          ? "text-black"
                          : "text-red-600"
                      }`}
                    >
                      Country
                    </label>
                    {isValidCountry(country) !== true &&
                      country.length !== 0 && (
                        <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                          Wrong format
                        </span>
                      )}
                  </div>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    maxLength={INPUT_LENGTH_MAX}
                    className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                      country.length === 0 || isValidCountry(country)
                        ? "border-gray-400 border"
                        : "border-red-600 border-2"
                    }`}
                    placeholder="United States"
                    onChange={hdlCountryChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-accent text-[13px] font-bold tracking-wide leading-[25px] mt-8 uppercase">
                Payment Details
              </h2>
              <div className="tablet:grid tablet:grid-cols-2 tablet:grid-rows-2 tablet:gap-4">
                <div className="tablet:col-span-2">
                  <div className="tablet:grid tablet:grid-cols-2">
                    <legend className="mt-4 text-[12px] font-bold tracking-tight tablet:row-span-2">
                      Payment Method
                    </legend>
                    <div
                      className={`mt-2 flex flex-row items-center gap-x-4 border ${
                        payMethod === PAYMENT_METHOD.EMONEY
                          ? "border-[#d87d4a]"
                          : "border-gray-400"
                      } rounded-lg px-4 py-1`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="e-Money"
                        className="mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight accent-[#d87d4a]"
                        placeholder=""
                        value={PAYMENT_METHOD.EMONEY}
                        onChange={hdlPayMethodOnClick}
                      />
                      <label
                        htmlFor="e-Money"
                        className="text-[14px] font-bold tracking-tight"
                      >
                        e-Money
                      </label>
                    </div>
                    <div
                      className={`mt-4 flex flex-row items-center gap-x-4 border ${
                        payMethod === PAYMENT_METHOD.COD
                          ? "border-[#d87d4a]"
                          : "border-gray-400"
                      } rounded-lg px-4 py-1`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="cod"
                        className="mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight accent-[#d87d4a]"
                        placeholder=""
                        value={PAYMENT_METHOD.COD}
                        onChange={hdlPayMethodOnClick}
                        defaultChecked
                      />
                      <label
                        htmlFor="cod"
                        className="text-[14px] font-bold tracking-tight"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
                {payMethod === PAYMENT_METHOD.EMONEY ? (
                  <fieldset className="tablet:col-span-2 tablet:grid tablet:grid-cols-2 tablet:grid-rows-1 tablet:gap-x-4">
                    <div className="mt-8 tablet:mt-0 tablet:col-start-1 tablet:row-start-2">
                      <div className="flex flex-row items-center justify-between">
                        <label
                          htmlFor="emoneyNumber"
                          className={`mt-4 text-[12px] font-bold tracking-tight ${
                            emoneyNumber.length === 0 ||
                            isValidEmoneyNumber(emoneyNumber)
                              ? "text-black"
                              : "text-red-600"
                          }`}
                        >
                          e-Money Number
                        </label>
                        {isValidEmoneyNumber(emoneyNumber) !== true &&
                          emoneyNumber.length !== 0 && (
                            <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                              Wrong format
                            </span>
                          )}
                      </div>
                      <input
                        type="text"
                        name="emoneyNumber"
                        id="emoneyNumber"
                        maxLength={EMONEYNUMBER_LENGTH_MAX}
                        className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                          emoneyNumber.length === 0 ||
                          isValidEmoneyNumber(emoneyNumber)
                            ? "border-gray-400 border"
                            : "border-red-600 border-2"
                        }`}
                        placeholder="238521993"
                        onChange={hdlEmoneyNumberChange}
                        value={emoneyNumber}
                      />
                    </div>
                    <div className="tablet:col-start-2 tablet:row-start-2">
                      <div className="flex flex-row items-center justify-between">
                        <label
                          htmlFor="emoneyPin"
                          className={`mt-4 text-[12px] font-bold tracking-tight ${
                            emoneyPin.length === 0 ||
                            isValidEmoneyPin(emoneyPin)
                              ? "text-black"
                              : "text-red-600"
                          }`}
                        >
                          e-Money PIN
                        </label>
                        {isValidEmoneyPin(emoneyPin) !== true &&
                          emoneyPin.length !== 0 && (
                            <span className="mt-4 text-[12px] font-bold tracking-tight text-red-600">
                              Wrong format
                            </span>
                          )}
                      </div>
                      <input
                        type="text"
                        name="emoneyPin"
                        id="emoneyPin"
                        maxLength={EMONEYPIN_LENGTH_MAX}
                        className={`block w-full mt-4 mb-4 p-4 rounded-lg borde text-14px font-bold tracking-tight ${
                          emoneyPin.length === 0 || isValidEmoneyPin(emoneyPin)
                            ? "border-gray-400 border"
                            : "border-red-600 border-2"
                        }`}
                        placeholder="6891"
                        onChange={hdlEmoneyPinChange}
                        value={emoneyPin}
                      />
                    </div>
                  </fieldset>
                ) : (
                  <div className="tablet:col-span-2 mt-8 flex flex-row items-center gap-x-4">
                    <Image
                      src={cod_icon}
                      alt="icon for COD"
                      className="w-16 h-16"
                    />
                    <p className="text-[15px] font-medium leading-[25px] text-gray-400">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </section>
        <section className="mt-8 bg-white rounded-lg p-4 desktop:w-1/3 desktop:mt-4 mb-16 desktop:mb-0">
          <h2 className="text-[18px] tracking-wider font-bold uppercase">
            Summary
          </h2>
          <div>
            {summaryItems.map((item) => {
              return (
                <SummaryItem
                  key={item.productId}
                  id={item.productId}
                  imageSrc={item.imageSrc}
                  productName={item.productName}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
          <div className="mt-8 mb-8">
            <div className="flex flex-row items-center justify-between mb-4">
              <span className="uppercase text-[15px] font-medium text-gray-400 leading-[25px]">
                Total
              </span>
              <span className="uppercase text-[18px] font-bold text-black">
                ${numberFormat.format(totalSummary)}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between mb-2">
              <span className="uppercase text-[15px] font-medium text-gray-400 leading-[25px]">
                Shipping
              </span>
              <span className="uppercase text-[18px] font-bold text-black">
                ${numberFormat.format(SHIPPING_FEE)}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between mb-2">
              <span className="uppercase text-[15px] font-medium text-gray-400 leading-[25px]">
                vat (included)
              </span>
              <span className="uppercase text-[18px] font-bold text-black">
                ${numberFormat.format(Math.ceil(calculateVAT(totalSummary)))}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between mb-2">
              <span className="uppercase text-[15px] font-medium text-gray-400 leading-[25px]">
                Grand total
              </span>
              <span className="uppercase text-[18px] font-bold text-black">
                ${numberFormat.format(calculateGrandTotal(totalSummary))}
              </span>
            </div>

            <button
              className="w-full mt-8 py-4 uppercase text-white text-[13px] font-bold tracking-[1px] bg-accent 
                                hover:bg-accentHover disabled:bg-gray-400"
              disabled={
                totalSummary === 0 ||
                !isValidName(name) ||
                !isValidEmail(email) ||
                !isValidPhone(phone) ||
                !isValidAddress(address) ||
                !isValidCity(city) ||
                !isValidCountry(country) ||
                !isValidZip(zip) ||
                (payMethod === PAYMENT_METHOD.EMONEY
                  ? !isValidEmoneyNumber(emoneyNumber) ||
                    !isValidEmoneyPin(emoneyPin)
                  : false)
              }
              onClick={openAckDialog}
            >
              continue & pay
            </button>
          </div>
        </section>
        {isShowAckDialog && (
          <AcknowledgeDialog hdlClickOutside={hdlClickOutside} />
        )}
      </main>
    </div>
  );
}
