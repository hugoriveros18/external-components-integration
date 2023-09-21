import React from "react";
import { useListContext, ListContextProvider } from 'vtex.list-context';
import ProductsFormat from "./ProductsFormat";

const defaultProducts:IntProductProps[] = [
  {
    productSku: '639099',
    videoSrc: '',
    rotationSpeed: 10,
    viewerImages: [
      "https://lh3.googleusercontent.com/DXhkRmzCsN0SNIPZydS9zHuDeSwIQSLg_ufaJLKKnSNKnmvGTVBBrZwj3WpfVb1pblfTgXUTzcYEHJegA8itpq6TKbUjfic_YxBTzrHxQb9aQgx-POpXRg8YL4Vgv252ZwmrdmUAsw",
      "https://lh3.googleusercontent.com/nWepvaXVEKZZ6zSjXMkJKKuGCLvtTIZvl6A1b3FEes6ksGYg7ZJBttoaAq48PiJK66xw8ge6skYHh51pU4L2qSf2-HtRHs9r6wTA2Plsv7-KX2eBHRI5Qtw-5BYu96C2q954MdLD8g",
      "https://lh3.googleusercontent.com/hUdt7i1RNC1Iumz5JNreemmLCPQAplzkeJaGaTwYkcgeXInKoWA5DPcCWiOpsFQvmOyYuoBxRx1jd69sCXq4XjexSB6luCARiqPI6EFaDdtpOx31-tzSKABZkBjP062gt6uQOn_IBA",
      "https://lh3.googleusercontent.com/1FrjICytaO_1FzMjJTQw2eKZrPJCPbUYqwHq_aQ_yWxfJuwnwUmOaWDPvQqy_ZwAXmgPLCt7TR50Jl9WJ0P6So6HfdaJjJJSzxO9QFfp4pnmxnXZIroShbwrY4gYFDs1-8CnVcZByg",
      "https://lh3.googleusercontent.com/GEpNb8zdFkEAXgcLSK1sHCRRgm2v16ZY2MgA6I5MiB4cBNqV4U0xDGY_7Jmpwl3EE3MexFXzECh3WI0fHdOljo8NkJmVvGxW5xB_dkhHBwy45zSzlwReWmNzwZ6Kmc3ozG85sXyEPA",
      "https://lh3.googleusercontent.com/QT6Syyp0DmgrDaJENlByGn3QWwMbAmkMzsLKBOAQ6JfbhycjpXQ1mARtO4SAB-NJ3U2882ZBL3N8dU1GiECJtxv8851R_o-UqsHzoAcP79PxkmV6P4q-WvoPExPkqnqW2hVpJyTVMA",
      "https://lh3.googleusercontent.com/tlF_lJ9pUR1A23dy7bJVo-IHm5FocmBNO497DGDyyfb4RZKo6Sic6ly_aHx59b5nKiPK_6_Q1XGcvTK2LTYxGPNruoElOZ0T9EE2AxnLjV37aSTkf6ImC___dFwrufpebPdErXLuyw",
      "https://lh3.googleusercontent.com/s7i9P-Mn2zxTcUxnfX7bdH4kdfxRF9wKGkXXm1MfFPPdUv6hRk5JabEDqdih4UBr8E2wb1DfWKAsuHPAQi1pNcj1w_f4pv2uzywixzp26g3IXxwMIimE9mqxvVzz0S-H-MYWJwVmgg",
      "https://lh3.googleusercontent.com/EEUzgtIs8ycrDn0qZVLsYQPpvHoLvfwHQFjF-8_9bokU5NaEyWgpqGS8sLoH5Hs8bdv3vfn0HEOY8gyfyD88EldG94c9juOV1Qi8Y-TDqrPH45j5GI4LaPosdzqu7FPaYvqNUpITxQ",
      "https://lh3.googleusercontent.com/YdM1Y70dTkxyprvL0QIOoPF1U73lkPmz8YWRBy_R6evLeWrkRK-JlgUsyqeOAkDP08jcMitRi1MIvznrqz03ue2wPFLeS6tWBmpPIzxAxgmdjG0UKQofCt0oWZco--F3Z3mDDp8nVQ",
      "https://lh3.googleusercontent.com/u3TtXb4TKuojxMe4snw60b7hoH9IxaqeOj4laCEM-YENrNAOOaxudktPwzsYdDNoXqISxUAx6mWxEa1108xI4X2xSBseZyqp5I12ztLLO2Reh5RvPMNERohf24mN9SST2-TO8jyWLA",
      "https://lh3.googleusercontent.com/BjWXWwB_PC4OHcGQpIG5G2VC7SlwW6kfPtfg183Q8d5iact_a8mT5Yl0PXl0sy06IoNtpcrDdNj2JXPYkAFmmaO2vlNBoDJC2jsbE0qDHxjLnjxQAe_yVXKx7EqucMRCYatquShDiQ",
      "https://lh3.googleusercontent.com/HiPXbV1GHwWLYLZg1MGQI9iohc7te6Ld3IgOXwiMtTzRgQDkWKLUrwsDhfnMebQDCbkZs6TAYvttqvCG4yxunUODHXD6p5pqfe02X3dHJofC-1j_l0uOaYV0jgcmh2HW2Fa2GlOVEw",
      "https://lh3.googleusercontent.com/efcKpqK7fnjkyX1-vLNBnmHG6Q5SpaS9WhxCZbrjtmXBVUNJlYVu5b3KYXrSyHYMUTRg91QZcWAlX4NVR4KEFkLst30acLsRObr9z4JS7jkdSiKDOPQh8gKkres8guVzkLuRd9jLmQ",
      "https://lh3.googleusercontent.com/pt7k53As3icF9ltIpik9dCcwnjtRe0XB1OAawQ9ILGCygM_98twTLiLToxPkJoVVxBdDWamuA0ZDpBxrrVwyL-QoLdYbkUAzwzVZaVw3CDwsTLSfPMK1oT4_2gZm3NV5HV60Q_eVMQ"
    ]
  },
  {
    productSku: '658345',
    videoSrc: '',
    rotationSpeed: 10,
    viewerImages: [
      "https://lh3.googleusercontent.com/DXhkRmzCsN0SNIPZydS9zHuDeSwIQSLg_ufaJLKKnSNKnmvGTVBBrZwj3WpfVb1pblfTgXUTzcYEHJegA8itpq6TKbUjfic_YxBTzrHxQb9aQgx-POpXRg8YL4Vgv252ZwmrdmUAsw",
      "https://lh3.googleusercontent.com/nWepvaXVEKZZ6zSjXMkJKKuGCLvtTIZvl6A1b3FEes6ksGYg7ZJBttoaAq48PiJK66xw8ge6skYHh51pU4L2qSf2-HtRHs9r6wTA2Plsv7-KX2eBHRI5Qtw-5BYu96C2q954MdLD8g",
      "https://lh3.googleusercontent.com/hUdt7i1RNC1Iumz5JNreemmLCPQAplzkeJaGaTwYkcgeXInKoWA5DPcCWiOpsFQvmOyYuoBxRx1jd69sCXq4XjexSB6luCARiqPI6EFaDdtpOx31-tzSKABZkBjP062gt6uQOn_IBA",
      "https://lh3.googleusercontent.com/1FrjICytaO_1FzMjJTQw2eKZrPJCPbUYqwHq_aQ_yWxfJuwnwUmOaWDPvQqy_ZwAXmgPLCt7TR50Jl9WJ0P6So6HfdaJjJJSzxO9QFfp4pnmxnXZIroShbwrY4gYFDs1-8CnVcZByg",
      "https://lh3.googleusercontent.com/GEpNb8zdFkEAXgcLSK1sHCRRgm2v16ZY2MgA6I5MiB4cBNqV4U0xDGY_7Jmpwl3EE3MexFXzECh3WI0fHdOljo8NkJmVvGxW5xB_dkhHBwy45zSzlwReWmNzwZ6Kmc3ozG85sXyEPA",
      "https://lh3.googleusercontent.com/QT6Syyp0DmgrDaJENlByGn3QWwMbAmkMzsLKBOAQ6JfbhycjpXQ1mARtO4SAB-NJ3U2882ZBL3N8dU1GiECJtxv8851R_o-UqsHzoAcP79PxkmV6P4q-WvoPExPkqnqW2hVpJyTVMA",
      "https://lh3.googleusercontent.com/tlF_lJ9pUR1A23dy7bJVo-IHm5FocmBNO497DGDyyfb4RZKo6Sic6ly_aHx59b5nKiPK_6_Q1XGcvTK2LTYxGPNruoElOZ0T9EE2AxnLjV37aSTkf6ImC___dFwrufpebPdErXLuyw",
      "https://lh3.googleusercontent.com/s7i9P-Mn2zxTcUxnfX7bdH4kdfxRF9wKGkXXm1MfFPPdUv6hRk5JabEDqdih4UBr8E2wb1DfWKAsuHPAQi1pNcj1w_f4pv2uzywixzp26g3IXxwMIimE9mqxvVzz0S-H-MYWJwVmgg",
      "https://lh3.googleusercontent.com/EEUzgtIs8ycrDn0qZVLsYQPpvHoLvfwHQFjF-8_9bokU5NaEyWgpqGS8sLoH5Hs8bdv3vfn0HEOY8gyfyD88EldG94c9juOV1Qi8Y-TDqrPH45j5GI4LaPosdzqu7FPaYvqNUpITxQ",
      "https://lh3.googleusercontent.com/YdM1Y70dTkxyprvL0QIOoPF1U73lkPmz8YWRBy_R6evLeWrkRK-JlgUsyqeOAkDP08jcMitRi1MIvznrqz03ue2wPFLeS6tWBmpPIzxAxgmdjG0UKQofCt0oWZco--F3Z3mDDp8nVQ",
      "https://lh3.googleusercontent.com/u3TtXb4TKuojxMe4snw60b7hoH9IxaqeOj4laCEM-YENrNAOOaxudktPwzsYdDNoXqISxUAx6mWxEa1108xI4X2xSBseZyqp5I12ztLLO2Reh5RvPMNERohf24mN9SST2-TO8jyWLA",
      "https://lh3.googleusercontent.com/BjWXWwB_PC4OHcGQpIG5G2VC7SlwW6kfPtfg183Q8d5iact_a8mT5Yl0PXl0sy06IoNtpcrDdNj2JXPYkAFmmaO2vlNBoDJC2jsbE0qDHxjLnjxQAe_yVXKx7EqucMRCYatquShDiQ",
      "https://lh3.googleusercontent.com/HiPXbV1GHwWLYLZg1MGQI9iohc7te6Ld3IgOXwiMtTzRgQDkWKLUrwsDhfnMebQDCbkZs6TAYvttqvCG4yxunUODHXD6p5pqfe02X3dHJofC-1j_l0uOaYV0jgcmh2HW2Fa2GlOVEw",
      "https://lh3.googleusercontent.com/efcKpqK7fnjkyX1-vLNBnmHG6Q5SpaS9WhxCZbrjtmXBVUNJlYVu5b3KYXrSyHYMUTRg91QZcWAlX4NVR4KEFkLst30acLsRObr9z4JS7jkdSiKDOPQh8gKkres8guVzkLuRd9jLmQ",
      "https://lh3.googleusercontent.com/pt7k53As3icF9ltIpik9dCcwnjtRe0XB1OAawQ9ILGCygM_98twTLiLToxPkJoVVxBdDWamuA0ZDpBxrrVwyL-QoLdYbkUAzwzVZaVw3CDwsTLSfPMK1oT4_2gZm3NV5HV60Q_eVMQ"
    ]
  },
  {
    productSku: '636075',
    videoSrc: '',
    rotationSpeed: 10,
    viewerImages: [
      "https://lh3.googleusercontent.com/DXhkRmzCsN0SNIPZydS9zHuDeSwIQSLg_ufaJLKKnSNKnmvGTVBBrZwj3WpfVb1pblfTgXUTzcYEHJegA8itpq6TKbUjfic_YxBTzrHxQb9aQgx-POpXRg8YL4Vgv252ZwmrdmUAsw",
      "https://lh3.googleusercontent.com/nWepvaXVEKZZ6zSjXMkJKKuGCLvtTIZvl6A1b3FEes6ksGYg7ZJBttoaAq48PiJK66xw8ge6skYHh51pU4L2qSf2-HtRHs9r6wTA2Plsv7-KX2eBHRI5Qtw-5BYu96C2q954MdLD8g",
      "https://lh3.googleusercontent.com/hUdt7i1RNC1Iumz5JNreemmLCPQAplzkeJaGaTwYkcgeXInKoWA5DPcCWiOpsFQvmOyYuoBxRx1jd69sCXq4XjexSB6luCARiqPI6EFaDdtpOx31-tzSKABZkBjP062gt6uQOn_IBA",
      "https://lh3.googleusercontent.com/1FrjICytaO_1FzMjJTQw2eKZrPJCPbUYqwHq_aQ_yWxfJuwnwUmOaWDPvQqy_ZwAXmgPLCt7TR50Jl9WJ0P6So6HfdaJjJJSzxO9QFfp4pnmxnXZIroShbwrY4gYFDs1-8CnVcZByg",
      "https://lh3.googleusercontent.com/GEpNb8zdFkEAXgcLSK1sHCRRgm2v16ZY2MgA6I5MiB4cBNqV4U0xDGY_7Jmpwl3EE3MexFXzECh3WI0fHdOljo8NkJmVvGxW5xB_dkhHBwy45zSzlwReWmNzwZ6Kmc3ozG85sXyEPA",
      "https://lh3.googleusercontent.com/QT6Syyp0DmgrDaJENlByGn3QWwMbAmkMzsLKBOAQ6JfbhycjpXQ1mARtO4SAB-NJ3U2882ZBL3N8dU1GiECJtxv8851R_o-UqsHzoAcP79PxkmV6P4q-WvoPExPkqnqW2hVpJyTVMA",
      "https://lh3.googleusercontent.com/tlF_lJ9pUR1A23dy7bJVo-IHm5FocmBNO497DGDyyfb4RZKo6Sic6ly_aHx59b5nKiPK_6_Q1XGcvTK2LTYxGPNruoElOZ0T9EE2AxnLjV37aSTkf6ImC___dFwrufpebPdErXLuyw",
      "https://lh3.googleusercontent.com/s7i9P-Mn2zxTcUxnfX7bdH4kdfxRF9wKGkXXm1MfFPPdUv6hRk5JabEDqdih4UBr8E2wb1DfWKAsuHPAQi1pNcj1w_f4pv2uzywixzp26g3IXxwMIimE9mqxvVzz0S-H-MYWJwVmgg",
      "https://lh3.googleusercontent.com/EEUzgtIs8ycrDn0qZVLsYQPpvHoLvfwHQFjF-8_9bokU5NaEyWgpqGS8sLoH5Hs8bdv3vfn0HEOY8gyfyD88EldG94c9juOV1Qi8Y-TDqrPH45j5GI4LaPosdzqu7FPaYvqNUpITxQ",
      "https://lh3.googleusercontent.com/YdM1Y70dTkxyprvL0QIOoPF1U73lkPmz8YWRBy_R6evLeWrkRK-JlgUsyqeOAkDP08jcMitRi1MIvznrqz03ue2wPFLeS6tWBmpPIzxAxgmdjG0UKQofCt0oWZco--F3Z3mDDp8nVQ",
      "https://lh3.googleusercontent.com/u3TtXb4TKuojxMe4snw60b7hoH9IxaqeOj4laCEM-YENrNAOOaxudktPwzsYdDNoXqISxUAx6mWxEa1108xI4X2xSBseZyqp5I12ztLLO2Reh5RvPMNERohf24mN9SST2-TO8jyWLA",
      "https://lh3.googleusercontent.com/BjWXWwB_PC4OHcGQpIG5G2VC7SlwW6kfPtfg183Q8d5iact_a8mT5Yl0PXl0sy06IoNtpcrDdNj2JXPYkAFmmaO2vlNBoDJC2jsbE0qDHxjLnjxQAe_yVXKx7EqucMRCYatquShDiQ",
      "https://lh3.googleusercontent.com/HiPXbV1GHwWLYLZg1MGQI9iohc7te6Ld3IgOXwiMtTzRgQDkWKLUrwsDhfnMebQDCbkZs6TAYvttqvCG4yxunUODHXD6p5pqfe02X3dHJofC-1j_l0uOaYV0jgcmh2HW2Fa2GlOVEw",
      "https://lh3.googleusercontent.com/efcKpqK7fnjkyX1-vLNBnmHG6Q5SpaS9WhxCZbrjtmXBVUNJlYVu5b3KYXrSyHYMUTRg91QZcWAlX4NVR4KEFkLst30acLsRObr9z4JS7jkdSiKDOPQh8gKkres8guVzkLuRd9jLmQ",
      "https://lh3.googleusercontent.com/pt7k53As3icF9ltIpik9dCcwnjtRe0XB1OAawQ9ILGCygM_98twTLiLToxPkJoVVxBdDWamuA0ZDpBxrrVwyL-QoLdYbkUAzwzVZaVw3CDwsTLSfPMK1oT4_2gZm3NV5HV60Q_eVMQ"
    ]
  }
]

export default function InteractiveProducts({
  products = defaultProducts,
  children
}: InteractiveProductsProps) {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //PRODUCTS FORMAT
  const productosFormateados = ProductsFormat({products});
  const contextoProductos = list.concat(productosFormateados);

  //JSX
  return (
    <ListContextProvider list={contextoProductos}>
      {children}
    </ListContextProvider>
  )
}

