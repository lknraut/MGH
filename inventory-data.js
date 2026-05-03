const INITIAL_INVENTORY = {
  'veg_tomato': { id: 'veg_tomato', name: 'टोमॅटो (Tomato)', category: 'vegetables', unit: 'kg', currentStock: 25, minStock: 5, maxStock: 50, costPerUnit: 40, supplier: 'Local Sabzi Mandi' },
  'veg_onion': { id: 'veg_onion', name: 'कांदा (Onion)', category: 'vegetables', unit: 'kg', currentStock: 30, minStock: 10, maxStock: 60, costPerUnit: 35 },
  'dairy_paneer': { id: 'dairy_paneer', name: 'पनिर (Paneer)', category: 'dairy', unit: 'kg', currentStock: 10, minStock: 3, maxStock: 15, costPerUnit: 320 },
  'dairy_milk': { id: 'dairy_milk', name: 'दूध (Milk)', category: 'dairy', unit: 'liter', currentStock: 15, minStock: 5, maxStock: 30, costPerUnit: 60 },
  'grain_wheat_flour': { id: 'grain_wheat_flour', name: 'गहू आटा (Wheat Flour)', category: 'grains', unit: 'kg', currentStock: 100, minStock: 20, maxStock: 200, costPerUnit: 35 },
  'grain_rice': { id: 'grain_rice', name: 'तांदूळ (Rice)', category: 'grains', unit: 'kg', currentStock: 50, minStock: 15, maxStock: 100, costPerUnit: 65 },
  'pulse_toor_dal': { id: 'pulse_toor_dal', name: 'तूर दाल (Toor Dal)', category: 'pulses', unit: 'kg', currentStock: 30, minStock: 10, maxStock: 50, costPerUnit: 140 },
  'spice_garam_masala': { id: 'spice_garam_masala', name: 'गरम मसाला (Garam Masala)', category: 'spices', unit: 'gm', currentStock: 2000, minStock: 500, maxStock: 5000, costPerUnit: 0.8 },
  'spice_salt': { id: 'spice_salt', name: 'मीठ (Salt)', category: 'spices', unit: 'kg', currentStock: 10, minStock: 2, maxStock: 20, costPerUnit: 20 },
  'oil_refined': { id: 'oil_refined', name: 'रिफाइंड तेल (Refined Oil)', category: 'oils', unit: 'liter', currentStock: 20, minStock: 5, maxStock: 40, costPerUnit: 120 },
  'bev_tea_leaves': { id: 'bev_tea_leaves', name: 'चाय पत्ती (Tea Leaves)', category: 'beverages', unit: 'kg', currentStock: 3, minStock: 1, maxStock: 10, costPerUnit: 450 },
  'nuts_cashew': { id: 'nuts_cashew', name: 'काजू (Cashew)', category: 'nuts', unit: 'kg', currentStock: 2, minStock: 0.5, maxStock: 5, costPerUnit: 800 },
  'pack_container_small': { id: 'pack_container_small', name: 'कंटेनर छोटा (Small Container)', category: 'packaging', unit: 'pieces', currentStock: 500, minStock: 100, maxStock: 1000, costPerUnit: 3 },
  'pack_container_large': { id: 'pack_container_large', name: 'कंटेनर मोठा (Large Container)', category: 'packaging', unit: 'pieces', currentStock: 300, minStock: 50, maxStock: 800, costPerUnit: 5 },
  'prep_gravy_base': { id: 'prep_gravy_base', name: 'ग्रेवी बेस (Gravy Base)', category: 'prep', unit: 'kg', currentStock: 5, minStock: 2, maxStock: 10 },
};

const INITIAL_RECIPES = {
  'panir_kofta': {
    menuItemId: 'panir_kofta',
    autoDeduct: true,
    ingredients: [
      { id: 'dairy_paneer', qty: 0.150, unit: 'kg' },
      { id: 'prep_gravy_base', qty: 0.200, unit: 'kg' },
      { id: 'oil_refined', qty: 0.030, unit: 'liter' },
      { id: 'spice_garam_masala', qty: 5, unit: 'gm' }
    ]
  },
  'sadi_chapati': {
    menuItemId: 'sadi_chapati',
    autoDeduct: true,
    ingredients: [
      { id: 'grain_wheat_flour', qty: 0.040, unit: 'kg' },
      { id: 'oil_refined', qty: 0.005, unit: 'liter' }
    ]
  },
  'container': {
    menuItemId: 'container',
    autoDeduct: true,
    ingredients: [
      { id: 'pack_container_large', qty: 1, unit: 'pieces' }
    ]
  },
  'container5': {
    menuItemId: 'container5',
    autoDeduct: true,
    ingredients: [
      { id: 'pack_container_small', qty: 1, unit: 'pieces' }
    ]
  }
};
