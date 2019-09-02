const financias_total = [
  {
    id: 1,
    nome: "Total rendimento bruto",
    total: 244300.0
  },
  {
    id: 2,
    nome: "Total impostos pagos",
    total: 29214.71
  },
  {
    id: 1,
    nome: "Total alíquota media",
    total: 11.96
  }
];

const despesas = [
  {
    id: 1,
    descricao: "Despesas Livro-Caixa",
    tipo: {
      id: 1,
      nome: "despesas"
    },
    valor: 22400.0,
    economia_impostos: 6160.0,
    aliquota_media: 0
  },
  {
    id: 1,
    descricao: "Gastos Saúde",
    tipo: {
      id: 1,
      nome: "despesas"
    },
    valor: 2100.0,
    economia_impostos: 577.5,
    aliquota_media: 0
  }
];

const status = {
  id: 1,
  nome: "À PAGAR"
};

const financias = [
  {
    id: 1,
    vinculo: {
      id: 1,
      nome: "PF"
    },
    fonte: {
      id: 1,
      nome: "Hospital A"
    },
    tipo_fonte: {
      id: 1,
      nome: "Hospital/Convênios"
    },
    rendimento_bruto: 59500.0,
    impostos_pagos: 9059.87,
    aliquota_media: 15.23
  },
  {
    id: 2,
    vinculo: {
      id: 1,
      nome: "PF"
    },
    fonte: {
      id: 2,
      nome: "Plano de Saúde A"
    },
    tipo_fonte: {
      id: 1,
      nome: "Hospital/Convênios"
    },
    rendimento_bruto: 24500.0,
    impostos_pagos: 694.7,
    aliquota_media: 2.84
  },
  {
    id: 3,
    vinculo: {
      id: 1,
      nome: "PF"
    },
    fonte: {
      id: 3,
      nome: "Plano de Saúde B"
    },
    tipo_fonte: {
      id: 1,
      nome: "Hospital/Convênios"
    },
    rendimento_bruto: 7000.0,
    impostos_pagos: 0,
    aliquota_media: 0
  },
  {
    id: 4,
    vinculo: {
      id: 2,
      nome: "PJ"
    },
    fonte: {
      id: 4,
      nome: "Consultório"
    },
    tipo_fonte: {
      id: 2,
      nome: "Particular"
    },
    rendimento_bruto: 17500.0,
    impostos_pagos: 0,
    aliquota_media: 0
  },
  {
    id: 5,
    vinculo: {
      id: 2,
      nome: "PJ"
    },
    fonte: {
      id: 5,
      nome: "Hospital C"
    },
    tipo_fonte: {
      id: 1,
      nome: "Hospital/Convênios"
    },
    rendimento_bruto: 49000.0,
    impostos_pagos: 7021.7,
    aliquota_media: 14.33
  },
  {
    id: 6,
    vinculo: {
      id: 2,
      nome: "PJ"
    },
    fonte: {
      id: 6,
      nome: "Plano Saúde C"
    },
    tipo_fonte: {
      id: 1,
      nome: "Hospital/Convênios"
    },
    rendimento_bruto: 20300.0,
    impostos_pagos: 2908.99,
    aliquota_media: 14.33
  },
  {
    id: 7,
    vinculo: {
      id: 2,
      nome: "PJ"
    },
    fonte: {
      id: 7,
      nome: "Plano Saúde D"
    },
    tipo_fonte: {
      id: 1,
      nome: "Hospital/Convênios"
    },
    rendimento_bruto: 19600.0,
    impostos_pagos: 2808.68,
    aliquota_media: 14.33
  }
];
