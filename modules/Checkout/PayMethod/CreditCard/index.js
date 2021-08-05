import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import StyledTextField from "@/common/StyledTextField";
import Image from "next/image";
import DateFnsUtils from "@date-io/date-fns";
import { useValues } from "@/hooks/useValues";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  CreditWrapper,
  StyledPaper,
  CreditPickerWrapper,
  CreditButton,
  SelectWrapper,
  DatePickerWrapper,
  CVVWrapper,
  StyledButtonWrapper,
  StyledButton,
} from "./CreditCardElements";

function index(props) {
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCardChange = (e) => {
    setSelectedCard(e.target.name);
  };

  return (
    <>
      <CreditWrapper>
        <StyledPaper elevation={1}>
          <Typography variant="h6" align="center" gutterBottom>
            Añadir Tarjeta de Credito
          </Typography>
          <CreditPickerWrapper>
            <CreditButton selected={selectedCard === "visa" ? 1 : 0}>
              <Image
                name="visa"
                onClick={(e) => handleCardChange(e)}
                height={65}
                width={95}
                objectFit="contain"
                alt={"tile.title"}
                src={"/static/images/visa.png"}
              />
            </CreditButton>
            <CreditButton selected={selectedCard === "ae" ? 1 : 0}>
              <Image
                name="ae"
                onClick={(e) => handleCardChange(e)}
                height={65}
                width={95}
                objectFit="contain"
                alt={"tile.title"}
                src={"/static/images/american express.png"}
              />
            </CreditButton>
            <CreditButton selected={selectedCard === "mastercard" ? 1 : 0}>
              <Image
                name="mastercard"
                onClick={(e) => handleCardChange(e)}
                height={55}
                width={85}
                objectFit="contain"
                alt={"tile.title"}
                src={"/static/images/mastercard.png"}
              />
            </CreditButton>
          </CreditPickerWrapper>
          <div>
            <StyledTextField
              required
              name="Card_Name"
              label="Nombre de la Tarjeta"
              id="Card_Name"
              size="small"
              cssType=""
            />
          </div>
          <div>
            <StyledTextField
              required
              name="Card_Number"
              label="Número de la Tarjeta"
              id="Card_Number"
              size="small"
            />
          </div>

          <SelectWrapper>
            <DatePickerWrapper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth
                  variant="inline"
                  inputVariant="outlined"
                  size="small"
                  format="MM/yy"
                  margin="normal"
                  id="expDate"
                  placeholder="mm/yy"
                  label="Fecha de Expiración"
                  invalidDateMessage="Fecha invalida"
                  value={selectedDate}
                  onChange={handleDateChange}
                  open={false}
                  PopoverProps={false}
                  keyboardIcon={""}
                  KeyboardButtonProps={{
                    disabled: true,
                    style: { display: "none" },
                  }}
                />
              </MuiPickersUtilsProvider>
            </DatePickerWrapper>

            <CVVWrapper>
              <StyledTextField
                required
                name="cvv"
                label="CVV"
                id="cvv"
                size="small"
                type="password"
                cssType=""
              />
            </CVVWrapper>
          </SelectWrapper>
        </StyledPaper>
      </CreditWrapper>

      <CreditWrapper>
        <StyledPaper>
          <Typography variant="h6" align="center" gutterBottom>
            Dirección de Facturación
          </Typography>

          <div>
            <StyledTextField
              required
              name="City"
              label="Ciudad"
              id="City"
              size="small"
              cssType=""
            />
          </div>
          <div>
            <StyledTextField
              required
              name="Street"
              label="Calle"
              id="Street"
              size="small"
              cssType=""
            />
          </div>
          <div>
            <StyledTextField
              required
              name="Zip"
              label="Codigo Postal"
              id="Zip"
              size="small"
              cssType=""
            />
          </div>

          <div>
            <StyledTextField
              required
              name="Country"
              label="Pais"
              id="Country"
              size="small"
              cssType=""
            />
          </div>
          <StyledButtonWrapper>
            <StyledButton
              onClick={props.handleNext}
              fullWidth
              color="primary"
              variant="contained"
            >
              Continuar
            </StyledButton>
          </StyledButtonWrapper>
        </StyledPaper>
      </CreditWrapper>
    </>
  );
}
export default index;
