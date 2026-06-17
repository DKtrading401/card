export function createSignature(card) {

  const addresses = (card.addresses || [])
    .map(address => `
      <tr>
        <td valign="top"
            style="
              font-family:Arial,sans-serif;
              font-size:13px;
              color:#555;
              padding-top:2px;
              white-space:nowrap;
            ">
          <strong>${address.label}</strong>
        </td>

        <td
          style="
            font-family:Arial,sans-serif;
            font-size:13px;
            color:#555;
            padding-left:8px;
            padding-top:2px;
          ">

          <a
            href="${address.map}"
            style="
              color:#555;
              text-decoration:none;
            ">

            ${address.line1}

            ${address.line2
              ? `<br>${address.line2}`
              : ""}

          </a>

        </td>

      </tr>
    `)
    .join("");

  return `<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

</head>

<body style="margin:0;padding:0;">

<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    font-family:Arial,sans-serif;
    font-size:13px;
    color:#444;
  ">

<tr>

<td
  valign="top"
  style="padding-right:20px;">

<img
  src="https://card.dk-networks.de/assets/logo.png"
  width="170"
  alt="DK Networks">

</td>

<td
  valign="top">

<div
  style="
    font-size:24px;
    font-weight:bold;
    color:#1d3557;
  ">

${card.name}

</div>

<div
  style="
    font-size:15px;
    color:#666;
    margin-bottom:14px;
  ">

${card.title}

</div>

<div
  style="
    font-size:14px;
    font-weight:bold;
    color:#0066aa;
    margin-bottom:12px;
  ">

${card.company}

</div>

<table
  cellpadding="0"
  cellspacing="0"
  border="0">

<tr>

<td width="75">
Office
</td>

<td>

<a
href="tel:${card.officeLink}"
style="
color:#333;
text-decoration:none;
">

${card.office}

</a>

</td>

</tr>

<tr>

<td>
Mobile
</td>

<td>

<a
href="tel:${card.mobileLink}"
style="
color:#333;
text-decoration:none;
">

${card.mobile}

</a>

</td>

</tr>

<tr>

<td>
Email
</td>

<td>

<a
href="mailto:${card.email}"
style="
color:#0066aa;
text-decoration:none;
">

${card.email}

</a>

</td>

</tr>

<tr>

<td>
Website
</td>

<td>

<a
href="${card.website}"
style="
color:#0066aa;
text-decoration:none;
">

${card.websiteText}

</a>

</td>

</tr>

${addresses}

</table>

</td>

<td
style="padding-left:25px;">

<a
href="https://card.dk-networks.de/${card.slug}">

<img
src="https://card.dk-networks.de${card.qr}"
width="120"
alt="QR">

</a>

</td>

</tr>

</table>

</body>

</html>`;

}