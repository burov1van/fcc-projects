const mainForm = document.getElementById("form");
const fullName = document.getElementById("full-name");
const orderNo = document.getElementById("order-no");
const email = document.getElementById("email");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const damagedProduct = document.getElementById("damaged-product");
const nonconformingProduct = document.getElementById("nonconforming-product");
const delayedDispatch = document.getElementById("delayed-dispatch");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescriptionContainer = document.getElementById(
  "complaint-description-container"
);
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const refund = document.getElementById("refund");
const exchange = document.getElementById("exchange");
const otherSolution = document.getElementById("other-solution");
const btnContainer = document.getElementById("btn-container");
const solutionDescriptionContainer = document.getElementById(
  "solution-description-container"
);
const solutionDescription = document.getElementById("solution-description");
const submitBtn = document.getElementById("submit-btn");

function collectFormData() {
  let complaints = Array.from(
    document.querySelectorAll(
      '#complaints-group input[name="complaint"]:checked'
    )
  ).map((i) => i.value);

  let solution = null;
  const checkedRadio = document.querySelector(
    '#solutions-group input[name="solutions"]:checked'
  );
  if (checkedRadio) {
    solution = checkedRadio.value;
  }

  const objForm = {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    orderNo: orderNo.value.trim(),
    productCode: productCode.value.trim(),
    quantity: Number(quantity.value) || 0,
    complaints,
    complaintDescription: complaintDescription.value.trim(),
    solution,
    solutionDescription: solutionDescription.value.trim(),
  };

  return objForm;
}

function validateForm(formData = collectFormData()) {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const ORDER_NO_REGEX = /^2024\d{6}$/;
  const PRODUCT_CODE_REGEX = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/i;
  const QUANTITY_REGEX = /^[1-9]\d*$/;
  const MIN_DESCRIPTION_LENGTH = 20;

  function matchRegex(value, regex) {
    return regex.test(value.trim());
  }

  function minLength(value, length = MIN_DESCRIPTION_LENGTH) {
    return value.trim().length >= length;
  }

  const {
    fullName,
    email,
    orderNo,
    productCode,
    quantity,
    complaints,
    complaintDescription,
    solution,
    solutionDescription,
  } = formData;

  return {
    "full-name": fullName !== "",
    email: matchRegex(email, EMAIL_REGEX),
    "order-no": matchRegex(orderNo, ORDER_NO_REGEX),
    "product-code": matchRegex(productCode, PRODUCT_CODE_REGEX),
    quantity: matchRegex(String(quantity), QUANTITY_REGEX),
    "complaints-group": complaints.length > 0,
    "complaint-description": complaints.includes("other")
      ? minLength(complaintDescription)
      : true,
    "solutions-group": solution !== null,
    "solution-description":
      solution === "other" ? minLength(solutionDescription) : true,
  };
}

function isValid(validationResult) {
  return Object.values(validationResult).every((value) => value === true);
}

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = collectFormData();
  const validationResult = validateForm(formData);
  const validation = isValid(validationResult);
  highlightByResult(validationResult);
  console.log(formData);
  console.log(validationResult);
  console.log(validation);

  if (validation) {
    return alert("Форма успешно заполнена!");
  } else {
    return alert("Что-то пошло не так!");
  }
});

function highlightByResult(validationResult) {
  const elementMap = {
    "full-name": fullName,
    email: email,
    "order-no": orderNo,
    "product-code": productCode,
    quantity: quantity,
    "complaints-group": complaintsGroup,
    "complaint-description": complaintDescription,
    "solutions-group": solutionsGroup,
    "solution-description": solutionDescription,
  };

  const allValid = Object.values(validationResult).every((v) => v === true);

  if (allValid) {
    Object.values(elementMap).forEach((el) => {
      el.style.borderColor = "green";
    });
    return;
  }

  Object.entries(validationResult).forEach(([key, isValid]) => {
    const el = elementMap[key];
    if (!el) return;

    el.style.borderColor = isValid ? "green" : "red";
  });
}

fullName.addEventListener("change", () => {
  fullName.style.borderColor = fullName.value.trim() !== "" ? "green" : "red";
});

email.addEventListener("change", () => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
  email.style.borderColor = isValid ? "green" : "red";
});

orderNo.addEventListener("change", () => {
  const isValid = /^2024\d{6}$/.test(orderNo.value.trim());
  orderNo.style.borderColor = isValid ? "green" : "red";
});

productCode.addEventListener("change", () => {
  const isValid = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/i.test(
    productCode.value.trim()
  );
  productCode.style.borderColor = isValid ? "green" : "red";
});

quantity.addEventListener("change", () => {
  const isValid = /^[1-9]\d*$/.test(quantity.value.trim());
  quantity.style.borderColor = isValid ? "green" : "red";
});

complaintsGroup.addEventListener("change", () => {
  const checkedComplaints = complaintsGroup.querySelectorAll(
    'input[name="complaint"]:checked'
  );

  if (checkedComplaints.length > 0) {
    complaintsGroup.style.borderColor = "green";
  } else {
    complaintsGroup.style.borderColor = "red";
  }
});

solutionsGroup.addEventListener("change", () => {
  const checkedRadio = document.querySelector(
    '#solutions-group input[name="solutions"]:checked'
  );
  if (checkedRadio) {
    solutionsGroup.style.borderColor = "green";
  } else {
    solutionsGroup.style.borderColor = "red";
  }
});

complaintDescription.addEventListener("change", () => {
  if (otherComplaint.checked) {
    complaintDescription.style.borderColor =
      complaintDescription.value.trim().length >= 20 ? "green" : "red";
  }
});

solutionDescription.addEventListener("change", () => {
  if (otherSolution.checked) {
    solutionDescription.style.borderColor =
      solutionDescription.value.trim().length >= 20 ? "green" : "red";
  }
});
