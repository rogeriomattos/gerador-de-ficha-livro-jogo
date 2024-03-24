import { Template } from "../types";

const bloodOfZombies: Template = {
  key: "blood-of-zombies",
  title: "Sangue de Zumbis",
  numberSections: [
    {
      title: "Energia",
      key: "energy",
      value: 100,
    },
    {
      title: "Dinheiro",
      key: "money",
      value: 500,
    },
  ],
  textSections: [
    {
      title: "Informações",
      key: "infos",
      value: ["Parei na pagina 100", "Perei na pagina 1001"],
    },
    {
      title: "Itens & Equipamentos",
      key: "items",
      value: ["Chave", "Barbante", "Pregos"],
    },
  ],
  itemsSections: [
    {
      title: "Kits Médicos",
      key: "medical_kits",
      value: [{ title: "kit", value: 10 }],
    },
    {
      title: "Armas",
      key: "weapons",
      value: [{ title: "Pistola", value: 10 }],
    },
    {
      title: "Granadas",
      key: "grenades",
      value: [{ title: "Pistola", value: 10 }],
    },
  ],
};

export default bloodOfZombies;
