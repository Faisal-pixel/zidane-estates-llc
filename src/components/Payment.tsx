import { submitPayment } from "@/app/actions/actions";
import InViewWrapper from "@/app/utils/InViewWrapper";
import { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import Modal from "./Modal";

interface PaymentDetails {
  details: {
    card: {
      brand: string;
      expMonth: number;
      expYear: number;
      last4: string;
    };
    method: string;
  };
  status: string;
  token: string;
}

function CustomPaymentForm({
  amount,
  closeModal,
}: {
  amount: number;
  closeModal: () => void;
}) {
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;

  const [successModal, showSuccessModal] = useState(false);

  return (
    <>
      <PaymentForm
        applicationId={appId}
        locationId={locationId}
        formProps={{
          className: "flex flex-col gap-3",
        }}
        cardTokenizeResponseReceived={async (token: PaymentDetails) => {
          const result = await submitPayment(token?.token, amount);
          if (result) {
            return showSuccessModal(true);
          }

          if (!result) {
            alert("Error Processing Payment, Please Try again later");
          }
        }}
        createPaymentRequest={() => ({
          countryCode: "US",
          currencyCode: "USD",
          lineItems: [
            {
              amount: "22.15",
              label: "Item to be purchased",
              id: "SKU-12345",
              imageUrl: "https://url-cdn.com/123ABC",
              pending: true,
              productUrl: "https://my-company.com/product-123ABC",
            },
          ],
          taxLineItems: [
            {
              label: "State Tax",
              amount: "8.95",
              pending: true,
            },
          ],
          discounts: [
            {
              label: "Holiday Discount",
              amount: "5.00",
              pending: true,
            },
          ],
          requestBillingContact: false,
          requestShippingContact: false,
          shippingOptions: [
            {
              label: "Next Day",
              amount: "15.69",
              id: "1",
            },
            {
              label: "Three Day",
              amount: "2.00",
              id: "2",
            },
          ],
          // pending is only required if it's true.
          total: {
            amount: "41.79",
            label: "Total",
          },
        })}
      >
        {/* <GooglePay buttonSizeMode="fill" buttonColor="white" /> */}
        {/* <CashAppPay width="full" shape="semiround" /> */}
        <CreditCard
          buttonProps={{
            css: {
              backgroundColor: "#000000",
              color: "#fff",
              transition: "all 200ms ease-in-out ",
              "&:hover": {
                backgroundColor: "#5e5e5e",
              },
            },
          }}
        />
      </PaymentForm>

      <Modal
        title="Payment Successful"
        isOpen={successModal}
        onClose={() => {
          showSuccessModal(false);
          closeModal();
        }}
      >
        <InViewWrapper
          className="border-animate border-top py-5"
          style={{ "--border-color": "#5e5e5e" }}
        >
          <div className=" flex justify-end">
            <button
              onClick={() => {
                showSuccessModal(false);
                closeModal();
              }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2"
            >
              Close Modal
            </button>
          </div>
        </InViewWrapper>
      </Modal>
    </>
  );
}

export default CustomPaymentForm;

// // import useSquarePayments from '../hooks/useSquarePayments'

// function CustomPaymentForm({ amount }: { amount: number }) {
//     const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID
//     const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

//     const { PaymentForm, GooglePay, CashAppPay, CreditCard, handleTokenizeResponse, createPaymentRequest } = useSquarePayments({ amount })

//     return (
//         <PaymentForm
//             applicationId={appId}
//             locationId={locationId}
//             formProps={{
//                 className: 'flex flex-col gap-3',
//             }}
//             cardTokenizeResponseReceived={handleTokenizeResponse}
//             createPaymentRequest={createPaymentRequest}
//         >
//             <GooglePay buttonSizeMode="fill" buttonColor="white" />
//             <CashAppPay width="full" shape="semiround" />
//             <CreditCard
//                 buttonProps={{
//                     css: {
//                         backgroundColor: '#000000',
//                         color: '#fff',
//                         transition: 'all 200ms ease-in-out ',
//                         '&:hover': {
//                             backgroundColor: '#5e5e5e',
//                         },
//                     },
//                 }}
//             />
//         </PaymentForm>
//     )
// }

// export default CustomPaymentForm
