// --- DATA ---
const DEFAULT_MENU_CATEGORIES = [
{
    id: 'container',
    label: 'कंटेनर',
    icon: '🧈',
    items: [
     { id: 'container', name: 'कंटेनर', price: 10 },
     { id: 'container5', name: 'कंटेनर', price: 15 }
      ]
  },
   
  {
    id: 'tandoor_chapati',
    label: 'रोटी',
    icon: '🫓',
    items: [
      { id: 'sadi_chapati', name: 'साधी चपाती', price: 12 },
      { id: 'butter_chapati', name: 'बटर चपाती', price: 15 },
      { id: 'sadi_tandur', name: 'साधी तंदूर', price: 15 },
      { id: 'butter_tandur', name: 'बटर तंदूर', price: 20 },
      { id: 'kulcha', name: 'कुलचा', price: 35 },
      { id: 'butter_kulcha', name: 'बटर कुलचा', price: 40 },
      { id: 'nan', name: 'नान', price: 35 },
      { id: 'butter_nan', name: 'बटर नान', price: 40 },
      { id: 'garlic_nan', name: 'गार्लिक नान', price: 50 },
      { id: 'sadha_paratha', name: 'साधा पराठा', price: 20 },
      { id: 'sadha_butter_paratha', name: 'साधा बटर पराठा', price: 30 },
      { id: 'masala_paratha', name: 'मसाला पराठा', price: 40 },
      { id: 'tandur_lachha_paratha', name: 'तंदूर लच्छा पराठा', price: 20 },
      { id: 'tandur_butter_lachha_paratha', name: 'तंदूर बटर लच्छा पराठा', price: 30 },
    ]
  },
  

    { id: 'Breaverages', label: 'पेय', icon: '🥛', items: [
      { id: 'pani_water_bottel_10', name: 'पाणी बोटल छोटी', price: 10 },
      { id: 'pani_water_bottel_20', name: 'पाणी बोटल मोठी', price: 20 },
      { id: 'lassi_20', name: 'लस्सी हाफ', price: 20 },
      { id: 'lassi_35', name: 'लस्सी फूल', price: 35 },
      { id: 'butter_lassi_25', name: 'बटर लस्सी हाफ', price: 25},
      { id: 'butter_lassi_40', name: 'बटर लस्सी फूल', price: 40},
      { id: 'cold_drink25', name: 'कोल्ड ड्रिंक', price: 25},
      { id: 'cold_drink30', name: 'कोल्ड ड्रिंक', price: 30},
      { id: 'cold_drink40', name: 'कोल्ड ड्रिंक', price: 40},
      { id: 'cold_drink45', name: 'कोल्ड ड्रिंक', price: 45},
      { id: 'tea', name: 'चाय', price: 10 },
      { id: 'coffei', name: 'कॉफी', price: 25 },
    ]},

    {
    id: 'starter',
    label: 'स्टार्टर',
    icon: '🍢',
    items: [
      { id: 'vej_lollipop', name: 'वेज लॉलीपॉप', price: 150 },
      { id: 'panir_chilli', name: 'पनिर चिल्ली', price: 150 },
      { id: 'finger_chips', name: 'फिंगर चिप्स', price: 90 },
      { id: 'vej_crispy', name: 'वेज क्रिस्पी', price: 150 },
      { id: 'panir_65', name: 'पनिर ६५', price: 170 },
      { id: 'panir_lollipop', name: 'पनिर लॉलीपॉप', price: 200 }
    ]
  },
  {
    id: 'papad',
    label: 'पापड',
    icon: '🥖',
    items: [
      { id: 'roast_papad', name: 'रोस्ट पापड', price: 20 },
      { id: 'fry_papad', name: 'फ्राय पापड', price: 25  },
      { id: 'masala_papad', name: 'मसाला पापड', price: 30 },
      { id: 'roast_masala_papad', name: 'रोस्ट मसाला पापड', price: 30 }
    ]
  },
  {
    id: 'soup',
    label: 'सुप',
    icon: '🍲',
    items: [
      { id: 'manchau_soup', name: 'मनचाऊ सुप', price: 70 },
      { id: 'hot_and_sour_soup', name: 'हॉट अँन्ड सोर सुप', price: 70 },
      { id: 'tomato_soup', name: 'टोमॅटो सुप', price: 70 }
    ]
  },
  {
    id: 'salad',
    label: 'सलाद',
    icon: '🥗',
    items: [
      { id: 'green_salad', name: 'ग्रीन सलाद', price: 50 },
      { id: 'jain_salad', name: 'जैन सलाद', price: 40 }
    ]
  },
{
    id: 'dal_ka_kamal',
    label: 'दाल का कमाल',
    icon: '🫘',
    items: [
     
      { id: 'jira_dal', name: 'जिरा दाल', price: 100 },
      { id: 'half_jeera_dal', name: 'हाफ जिरा दाल', price: 55 },
      { id: 'dal_fry', name: 'दाल फ्राय', price: 110 },
      { id: 'half_dal_fry', name: 'हाफ दाल फ्राय', price: 60 },
      { id: 'butter_dal_fry', name: 'बटर दाल फ्राय', price: 120 },
       { id: 'half_butter_dal_fry', name: 'हाफ बटर दाल फ्राय', price: 80 },
      { id: 'dal_tadka', name: 'दाल तडका', price: 135 },
      { id: 'half_dal_tadka', name: 'हाफ दाल तडका', price: 80 },
      { id: 'dal_kolhapuri', name: 'दाल कोल्हापुरी', price: 135 },
      { id: 'half_dal_kolhapuri', name: 'हाफ दाल कोल्हापुरी', price: 75 },
      { id: 'dal_vachadi', name: 'दाल वच्हाडी', price: 140 },
      { id: 'half_varhadi_dal', name: 'हाफ वऱ्हाडी दाल', price: 90 },
      { id: 'dal_mugalai', name: 'दाल मुगलाई', price: 170 }
    ]
  },
  {
    id: 'rice',
    label: 'राईस',
    icon: '🍚',
    items: [
      { id: 'plain_rice', name: 'प्लेन राईस', price: 80 },
      { id: 'half_plain_rice', name: 'हाफ प्लेन राईस', price: 40 },        
      { id: 'jira_rice', name: 'जिरा राईस', price: 90 },
      { id: 'half_jeera_rice', name: 'हाफ जिरा राईस', price: 50 },
      { id: 'steam_rice', name: 'स्टीम राईस', price: 100 },
      { id: 'half_steam_rice', name: 'हाफ स्टीम राईस', price: 50 },
      { id: 'garlic_rice', name: 'गार्लिक राईस', price: 140 },
      { id: 'namdeo_rice', name: 'नामदेव राईस', price: 130 },
      { id: 'masala_rice', name: 'मसाला राईस', price: 120 },
      { id: 'dal_khichadi', name: 'दाल खिचडी', price: 120 },
      { id: 'vej_pulav', name: 'वेज पुलाव', price: 120 },
      { id: 'panir_pulav', name: 'पनिर पुलाव', price: 160 },
      { id: 'vej_biryani', name: 'वेज बिर्याणी', price: 130 },
      { id: 'vej_panir_biryani', name: 'वेज पनिर बिर्याणी', price: 160 },
      { id: 'vej_hydrabadi_biryani', name: 'वेज हैद्राबादी बिर्याणी', price: 160 },
      { id: 'vej_handi_biryani', name: 'वेज हंडी बिर्याणी', price: 140 },
      { id: 'panir_handi_biryani', name: 'पनिर हंडी बिर्याणी', price: 160 }
    ]
  },
  

  {
    id: 'panir_ka_kamal',
    label: 'पनिर का कमाल',
    icon: '🧈',
    items: [
      { id: 'palak_panir', name: 'पालक पनिर', price: 150 },
      { id: 'panir_matar', name: 'पनिर मटर', price: 150 },
      { id: 'panir_kadai', name: 'पनिर कढई', price: 160 },
      { id: 'panir_tawa', name: 'पनिर तवा', price: 170 },
     { id: 'panir_vanhadi', name: 'पनिर वन्हाडी', price: 150 },
      { id: 'panir_handi', name: 'पनिर हंडी', price: 170 },
      { id: 'panir_bhurji_dry', name: 'पनिर भुर्जी ड्राय', price: 175 },
      { id: 'panir_bhurji_curry', name: 'पनिर भुर्जी करी', price: 170 },
      { id: 'panir_butter_masala', name: 'पनिर बटर मसाल', price: 150 },
      { id: 'panir_tikka_masala', name: 'पनिर टिक्का मसाला', price: 170 },
      { id: 'panir_tufani', name: 'पनिर तुफानी', price: 170 },
      { id: 'panir_masala', name: 'पनिर मसाला', price: 150 },
      { id: 'shahi_panir', name: 'शाही पनिर', price: 150 },
      { id: 'panir_kolhapuri', name: 'पनिर कोल्हापुरी', price: 170 },
      { id: 'panir_sagwala', name: 'पनिर सागवाल', price: 160 },
      { id: 'panir_hydrabadi', name: 'पनिर हैद्राबादी', price: 170 },
      { id: 'panir_chatpata', name: 'पनिर चटपटा', price: 160 },
      { id: 'panir_takatak', name: 'पनिर टकाटक', price: 170 },
      { id: 'panir_korma', name: 'पनिर कोरमा', price: 150 },
      { id: 'chij_panir_butter_masala', name: 'चिज पनिर बटर मसाला', price: 180 },
      { id: 'lachha_panir', name: 'लच्छा पनिर', price: 170 },
      { id: 'panir_angara', name: 'पनिर अंगारा', price: 180 },
      { id: 'panir_jayapuri', name: 'पनिर जयपुरी', price: 180 },
      { id: 'panir_sawji', name: 'पनिर सावजी', price: 150 },
     { id: 'panir_kofta', name: 'पनिर कोफ्ता', price: 180 }
    
    ]
  },
{
    id: 'panir_special',
    label: 'पनिर स्पेशल',
    icon: '🧈',
    items: [
  { id: 'panir_mili_juli', name: 'पनिर मिली जुली', price: 250 },
      { id: 'panir_lahori', name: 'पनिर लाहोरी', price: 250 },
      { id: 'panir_lara', name: 'पनिर लारा', price: 250 },
      { id: 'panir_afghani', name: 'पनिर अफगानी', price: 250 },
      { id: 'panir_pasanda', name: 'पनिर पसंदा', price: 250 },
      { id: 'panir_chij_ball_curry', name: 'पनिर चिज बॉल करी', price: 250 },
      { id: 'panir_tiranga', name: 'पनिर तिरंगा', price: 300 },
      { id: 'panir_patiyala', name: 'पनिर पटीयाला', price: 250 },
      { id: 'panir_do_pyaja', name: 'पनिर दो प्याजा', price: 250 }
    ]
  },


    {
    id: 'veg_sabji',
    label: 'वेज सब्जी',
    icon: '🥘',
    items: [
      { id: 'jira_aalu', name: 'जिरा आलू', price: 90 },
      { id: 'baingan_bharata', name: 'बैगन भरता', price: 110 },
      { id: 'baingan_masala', name: 'बैगन मसाला', price: 110 },
      { id: 'bhendi_masala', name: 'भेंडी मसाला', price: 150 },
      { id: 'green_peas_masala', name: 'ग्रीन पिस मसाला', price: 135 },
      { id: 'chana_masala', name: 'चना मसाला', price: 130 },
      { id: 'aalu_matar', name: 'आलू मटर', price: 125 },
      { id: 'dam_aalu', name: 'दम आलू', price: 130 },
      { id: 'plain_palak', name: 'प्लेन पालक', price: 120 },
      { id: 'shev_bhaji', name: 'शेव भाजी', price: 125 },
      { id: 'aalu_gobhi_matar', name: 'आलू गोबी मटर', price: 135 },
      { id: 'aalu_gobhi_masala', name: 'आलू गोबी मसाला', price: 130 },
      { id: 'aalu_palak', name: 'आलू पालक', price: 120 },
      { id: 'gobhi_masala', name: 'गोबी मसाला', price: 125 },
      { id: 'gobhi_matar', name: 'गोबी मटर', price: 130 }
    ]
  },

  {
    id: 'special_sabji',
    label: 'स्पेशल सब्जी',
    icon: '🍛',
    items: [
      { id: 'mix_vej', name: 'मिक्स वेज', price: 140 },
      { id: 'vej_kolhapuri', name: 'वेज कोल्हापुरी', price: 140 },
      { id: 'vej_tufani', name: 'वेज तुफानी', price: 150 },
      { id: 'vej_handi', name: 'वेज हन्डी', price: 150 },
      { id: 'vej_tawa', name: 'वेज तवा', price: 150 },
      { id: 'vej_kadhai', name: 'वेज कढाई', price: 150 },
      { id: 'stop_capsicum', name: 'स्टॉप कॅप्सीकम', price: 140 },
      { id: 'stop_tomato', name: 'स्टॉप टोमॅटो', price: 140 },
      { id: 'methi_matar', name: 'मेथी मटर', price: 140 },
      { id: 'methi_matar_malai', name: 'मेथी मटर मलाई', price: 170 },
      { id: 'vej_hydrabadi', name: 'वेज हैद्राबादी', price: 150 },
      { id: 'vej_kima_kasturi', name: 'वेज किमा कस्तुरी', price: 150 },
      { id: 'vej_jayapuri', name: 'वेज जयपुरी', price: 150 },
      { id: 'vej_maratha', name: 'वेज मराठा', price: 150 },
      { id: 'vej_bhuna', name: 'वेज भूना', price: 150 },
      { id: 'vej_angara', name: 'वेज अंगारा', price: 160 },
      { id: 'vej_patiyala', name: 'वेज पटियाला', price: 160 },
      { id: 'vej_andakari', name: 'वेज अंडाकरी', price: 140 },
      { id: 'patodi', name: 'पाटोडी', price: 150 },
      { id: 'vej_mili_juli', name: 'वेज मिली जुली', price: 200 },
      { id: 'vej_tiranga', name: 'वेज तिरंगा', price: 200 }
    ]
  },
  

  {
    id: 'kofta_special',
    label: 'कोफ्ता स्पेशल',
    icon: '🥙',
    items: [
      { id: 'vej_kofta', name: 'वेज कोफ्ता', price: 140 },
      { id: 'panir_kofta', name: 'पनिर कोफ्ता', price: 180 },
      { id: 'malai_kofta', name: 'मलाई कोफ्ता', price: 140 },
      { id: 'vej_punjabi_kofta', name: 'वेज पंजाबी कोफ्ता', price: 150 },
      { id: 'vej_palak_kofta', name: 'वेज पालक कोफ्ता', price: 170 },
      { id: 'panir_punjabi_kofta', name: 'पनिर पंजाबी कोफ्ता', price: 170 },
      { id: 'panir_palak_kofta', name: 'पनिर पालक कोफ्ता', price: 180 },
      { id: 'nargis_kofta', name: 'नरगिस कोफ्ता', price: 250 },
      { id: 'gayatri_special_sabji1', name: 'गायत्री स्पेशल सब्जी', price: 300 },
    ]
  },
  {
    id: 'kaju_special',
    label: 'काजू स्पेशल',
    icon: '🥜',
    items: [
      { id: 'kaju_curry', name: 'काजू करी', price: 190 },
      { id: 'kaju_masala', name: 'काजू मसाला', price: 190 },
      { id: 'panir_kaju_curry', name: 'पनिर काजू करी', price: 190 },
      { id: 'panir_kaju_masala', name: 'पनिर काजू मसाला', price: 190 },
      { id: 'kaju_khoya', name: 'काजू खोया', price: 190 },
      { id: 'kaju_mawa', name: 'काजू मावा', price: 200 }
    ]
  },
  {
    id: 'mushroom',
    label: 'मशरूम',
    icon: '🍄',
    items: [
      { id: 'mushroom_masala', name: 'मशरूम मसाला', price: 190 },
      { id: 'mushroom_curry', name: 'मशरूम करी', price: 190 },
      { id: 'panir_mushroom_masala', name: 'पनिर मशरूम मसाला', price: 200 },
      { id: 'mushroom_panir_kadai', name: 'मशरूम पनिर कढई', price: 200 }
    ]
  },
  {
    id: 'vanhadi_special',
    label: 'वन्हाडी स्पेशल',
    icon: '🥘',
    items: [
    { id: 'gayatri_special_sabji', name: 'गायत्री स्पेशल सब्जी', price: 300 },
      { id: 'panir_vanhadi1', name: 'पनिर वन्हाडी', price: 150 },
      { id: 'vej_andakari', name: 'वेज अंडाकरी', price: 140 },
      { id: 'patodi', name: 'पाटोडी', price: 150 },
      { id: 'gud_bhaji', name: 'गुड भाजी', price: 150 },
      { id: 'shev_tamatar', name: 'शेव टमाटर', price: 130 }
    ]
  },


   { id: 'ice-creme', label: 'आइस क्रीम', icon: '🍧', items: [
      { id: 'ice_Creme_10', name: 'आइसक्रीम', price: 10 },
      { id: 'ice_Creme_15', name: 'आइसक्रीम', price: 15 },
      { id: 'ice_Creme_20', name: 'आइसक्रीम', price: 20 },
      { id: 'ice_Creme_25', name: 'आइसक्रीम', price: 25 },
      { id: 'ice_Creme_30', name: 'आइसक्रीम', price: 30 },
      { id: 'ice_Creme_35', name: 'आइसक्रीम', price: 35 },
      { id: 'ice_Creme_40', name: 'आइसक्रीम', price: 40 },
      { id: 'ice_Creme_54', name: 'आइसक्रीम', price: 45 }, 
      { id: 'ice_Creme_54', name: 'आइसक्रीम', price: 50 },
      { id: 'ice_Creme_54', name: 'आइसक्रीम', price: 55 },
      { id: 'ice_Creme_54', name: 'आइसक्रीम', price: 60 },
    { id: 'lassi_20', name: 'लस्सी हाफ', price: 20 },
      { id: 'lassi_35', name: 'लस्सी फूल', price: 35 },
      { id: 'butter_lassi_25', name: 'बटर लस्सी हाफ', price: 25},
      { id: 'butter_lassi_40', name: 'बटर लस्सी फूल', price: 40},
      { id: 'cold_drink25', name: 'कोल्ड ड्रिंक', price: 25},
      { id: 'cold_drink30', name: 'कोल्ड ड्रिंक', price: 30},
      { id: 'cold_drink40', name: 'कोल्ड ड्रिंक', price: 40},
      { id: 'cold_drink45', name: 'कोल्ड ड्रिंक', price: 45}
     ]},
  {
    id: 'sweet',
    label: 'स्वीट',
    icon: '🍮',
    items: [
      { id: 'gulab_jamun', name: 'गुलाब जामुन', price: 20 },
      { id: 'kala_jamun', name: 'काला जामुन', price: 30 },
      { id: 'rasgulla', name: 'रसगुल्ला', price: 20 },
      { id: 'chamcham', name: 'चमचम', price: 20 },
      { id: 'rasmalai', name: 'रसमलाई', price: 40 },
      { id: 'dahivadi', name: 'दहिवाटी', price: 25 },
      { id: 'shrikhand', name: 'श्रीखंड', price: 30 }
    ]
  },
  {
    id: 'namkin',
    label: 'नमकीन',
    icon: '🥟',
    items: [
      { id: 'dahivada', name: 'दहिवडा', price: 40 },
      { id: 'dahibundi', name: 'दहिबुंदी', price: 40 }
    ]
  },
  {
    id: 'rayta',
    label: 'रायता',
    icon: '🥣',
    items: [
      { id: 'veg_rayta', name: 'वेज रायता', price: 30 },
      { id: 'bundi_rayta', name: 'बुंदी रायता', price: 30 }
    ]
  },

  {
    id: 'chaynij',
    label: 'चायनिज',
    icon: '🍜',
    items: [
      { id: 'noodles', name: 'नूडल्स', price: 80 },
      { id: 'hakka_noodles', name: 'हक्का नूडल्स', price: 75 },
      { id: 'shezwan_noodles', name: 'शेजवान नूडल्स', price: 90 },
      { id: 'noodles_manchurian', name: 'नूडल्स + मन्चुरीयन', price: 95 },
      { id: 'singapuri_noodles', name: 'सिंगापुरी नूडल्स', price: 90 },
      { id: 'shev_noodles_manchurian', name: 'शे. नूडल्स मन्चुरीयन', price: 100 },
      { id: 'chilli_garlic_noodles', name: 'चिली गार्लिक नूडल्स', price: 90 },
      { id: 'manchurian_gravy', name: 'मन्चुरीयन ग्रेवी', price: 80 },
      { id: 'manchurian_dry', name: 'मन्चुरीयन ड्राय', price: 90 },
      { id: 'fried_rice', name: 'फ्राईड राईस', price: 80 },
      { id: 'shezwan_fried_rice', name: 'शेजवान फ्राईड राईस', price: 90 },
      { id: 'manchurian_rice', name: 'मन्चुरीयन राईस', price: 95 },
      { id: 'shezwan_manchurian_rice', name: 'शेजवान मन्चुरीयन राईस', price: 105 },
      { id: 'triple_rice', name: 'ट्रिपल राईस', price: 100 },
      { id: 'triple_rice_gravy', name: 'ट्रिपल राईस ग्रेवी', price: 105 },
      { id: 'singapuri_fried_rice', name: 'सिंगापुरी फ्राईड राईस', price: 85 },
      { id: 'chaynij_bhel', name: 'चायनिज भेल', price: 100 },
      { id: 'bambay_bhel', name: 'बॉम्बे भेल', price: 100 },
      { id: 'panir_fried_rice', name: 'पनिर फ्राईड राईस', price: 115 },
      { id: 'chilli_garlic_rice', name: 'चिली गार्लिक राईस', price: 95 },
      { id: 'chilli_garlic_m_rice', name: 'चिली गार्लिक म. राईस', price: 100 },
      { id: 'panir_manchurian_gravy', name: 'पनिर मन्चुरीयन ग्रेव्ही', price: 140 },
      { id: 'panir_manchurian_dry', name: 'पनिर मन्चुरीयन ड्राय', price: 145 },
      { id: 'gobhi_manchurian', name: 'गोबी मन्चुरीयन', price: 110 },
      { id: 'panir_chilli_gravy', name: 'पनिर चिली ग्रेव्ही', price: 145 },



      { id: 'half_noodles', name: 'हाफ नूडल्स', price: 50 },
      { id: 'half_hakka_noodles', name: 'हाफ हक्का नूडल्स', price: 50 },
      { id: 'half_shezwan_noodles', name: 'हाफ शेजवान नूडल्स', price: 55 },
      { id: 'half_noodles_manchurian', name: 'हाफ नूडल्स + मन्चुरीयन', price: 60 },
      { id: 'half_singapuri_noodles', name: 'हाफ सिंगापुरी नूडल्स', price: 55 },
      { id: 'half_shev_noodles_manchurian', name: 'हाफ शे. नूडल्स मन्चुरीयन', price: 60 },
      { id: 'half_chilli_garlic_noodles', name: 'हाफ चिली गार्लिक नूडल्स', price: 55 },
      { id: 'half_manchurian_gravy', name: 'हाफ मन्चुरीयन ग्रेवी', price: 50 },
      { id: 'half_manchurian_dry', name: 'हाफ मन्चुरीयन ड्राय', price: 50 },
      { id: 'half_fried_rice', name: 'हाफ फ्राईड राईस', price: 50 },
      { id: 'half_shezwan_fried_rice', name: 'हाफ शेजवान फ्राईड राईस', price: 55 },
      { id: 'half_manchurian_rice', name: 'हाफ मन्चुरीयन राईस', price: 55 },
      { id: 'half_shezwan_manchurian_rice', name: 'हाफ शेजवान मन्चुरीयन राईस', price: 65 },
      { id: 'half_triple_rice', name: 'हाफ ट्रिपल राईस', price: 60 },
      { id: 'half_triple_rice_gravy', name: 'हाफ ट्रिपल राईस ग्रेवी', price: 65 },
      { id: 'half_singapuri_fried_rice', name: 'हाफ सिंगापुरी फ्राईड राईस', price: 50 },
      { id: 'half_chaynij_bhel', name: 'हाफ चायनिज भेल', price: 60 },
      { id: 'half_bambay_bhel', name: 'हाफ बॉम्बे भेल', price: 60 },
      { id: 'half_panir_fried_rice', name: 'हाफ पनिर फ्राईड राईस', price: 75 },
      { id: 'half_chilli_garlic_rice', name: 'हाफ चिली गार्लिक राईस', price: 50 },
      { id: 'half_chilli_garlic_m_rice', name: 'हाफ चिली गार्लिक म. राईस', price: 60 },
      { id: 'half_panir_manchurian_gravy', name: 'हाफ पनिर मन्चुरीयन ग्रेव्ही', price: 140 },
      { id: 'half_panir_manchurian_dry', name: 'हाफ पनिर मन्चुरीयन ड्राय', price: 145 },
      { id: 'half_gobhi_manchurian', name: 'हाफ गोबी मन्चुरीयन', price: 110 },
      { id: 'half_panir_chilli_gravy', name: 'हाफ पनिर चिली ग्रेव्ही', price: 145 }
    ]
  },


  {
    id: 'south_indian',
    label: 'साउथ इंडियन',
    icon: '🫔',
    items: [
      { id: 'masala_dosa', name: 'मसाला दोसा', price: 55 },
      { id: 'kataphis_dosa', name: 'कटफिस दोसा', price: 60 },
      { id: 'paper_sadha_dosa', name: 'पेपर साधा दोसा', price: 90 },
      { id: 'paper_masala_dosa', name: 'पेपर मसाला दोसा', price: 100 },
      { id: 'paper_butter_masala_dosa', name: 'पेपर बटर मसाला दोसा', price: 120 },
      { id: 'paper_butter_sadha_dosa', name: 'पेपर बटर साधा दोसा', price: 110 },
      { id: 'plain_butter_dosa', name: 'प्लेन बटर दोसा', price: 60 },
      { id: 'butter_masala_dosa', name: 'बटर मसाला दोसा', price: 65 },
      { id: 'butter_kataphis_dosa', name: 'बटर कटफिस दोसा', price: 70 },
      { id: 'mysur_masala_dosa', name: 'मैसूर मसाला दोसा', price: 80 },
      { id: 'panir_mysur_dosa', name: 'पनिर मैसूर दोसा', price: 115 },
      { id: 'chij_mysur_dosa', name: 'चिज मैसूर दोसा', price: 125 },
      { id: 'panir_chij_mysur_dosa', name: 'पनिर चिज मैसूर दोसा', price: 130 },
      { id: 'hydrabadi_dosa', name: 'हैद्राबादी दोसा', price: 95 },
      { id: 'hydrabadi_special_chij_dosa', name: 'हैद्राबादी स्पेशल चिज दोसा', price: 105 },
      { id: 'spring_roll', name: 'स्प्रींग रोल', price: 80 },
      { id: 'panir_spring_roll', name: 'पनिर स्प्रींग रोल', price: 115 },
      { id: 'chaynij_dosa', name: 'चायनिज दोसा', price: 85 },
      { id: 'panir_dosa_plain', name: 'पनिर दोसा प्लेन', price: 100 },
      { id: 'panir_masala_dosa', name: 'पनिर मसाला दोसा', price: 105 },
      { id: 'chij_dosa_plain', name: 'चिज दोसा प्लेन', price: 80 },
      { id: 'chij_masala_dosa', name: 'चिज मसाला दोसा', price: 90 },
      { id: 'onion_masala_dosa', name: 'ऑनियन मसाला दोसा', price: 80 },
      { id: 'tomato_masala_dosa', name: 'टोमॅटो मसाला दोसा', price: 80 },
      { id: 'tomato_onion_masala_dosa', name: 'टोमॅटो ऑनियन मसाला दोसा', price: 85 },
      { id: 'gayatri_special_dosa', name: 'गायत्री स्पेशल दोसा', price: 125 }
    ]
  },
  {
    id: 'south_indian_uttapam',
    label: 'साउथ इंडियन उत्तपम',
    icon: '🥞',
    items: [
      { id: 'onion_uttapam', name: 'ऑनियन उत्तपम', price: 80 },
      { id: 'chij_onion_uttapam', name: 'चिज ऑनियन उत्तपम', price: 95 },
      { id: 'panir_onion_uttapam', name: 'पनिर ऑनियन उत्तपम', price: 95 },
      { id: 'panir_chij_onion_uttapam', name: 'पनिर चिज ऑनियन उत्तपम', price: 105 },
      { id: 'tomato_uttapam', name: 'टोमॅटो उत्तपम', price: 80 },
      { id: 'chij_tomato_uttapam', name: 'चिज टोमॅटो उत्तपम', price: 95 },
      { id: 'panir_tomato_uttapam', name: 'पनिर टोमॅटो उत्तपम', price: 95 },
      { id: 'panir_chij_tomato_uttapam', name: 'पनिर चिज टोमॅटो उत्तपम', price: 105 },
      { id: 'masala_uttapam', name: 'मसाला उत्तपम', price: 80 },
      { id: 'chij_masala_uttapam', name: 'चिज मसाला उत्तपम', price: 95 },
      { id: 'panir_masala_uttapam', name: 'पनिर मसाला उत्तपम', price: 95 },
      { id: 'panir_chij_masala_uttapam', name: 'पनिर चिज मसाला उत्तपम', price: 110 },
      { id: 'tomato_onion_uttapam', name: 'टोमॅटो ऑनियन उत्तपम', price: 90 },
      { id: 'chij_tomato_onion_uttapam', name: 'चिज टोमॅटो ऑनियन उत्तपम', price: 105 },
      { id: 'panir_tomato_onion_uttapam', name: 'पनिर टोमॅटो ऑनियन उत्तपम', price: 105 },
      { id: 'chij_panir_tomato_onion_uttapam', name: 'चिज पनिर टोमॅटो ऑनियन उत्तपम', price: 115 },
      { id: 'uttapam_mix_masala', name: 'उत्तपम मिक्स मसाला', price: 95 },
      { id: 'chij_mix_uttapam_masala', name: 'चिज मिक्स उत्तपम मसाला', price: 115 },
      { id: 'panir_mix_uttapam_masala', name: 'पनिर मिक्स उत्तपम मसाला', price: 115 },
      { id: 'chij_panir_mix_uttapam_masala', name: 'चिज पनिर मिक्स उत्तपम मसाला', price: 120 },
      { id: 'panir_uttapam', name: 'पनिर उत्तपम', price: 115 },
      { id: 'panir_chij_uttapam', name: 'पनिर चिज उत्तपम', price: 125 }
    ]
  },
  {
    id: 'special_pav_bhaji',
    label: 'स्पेशल पावभाजी',
    icon: '🥖',
    items: [
      { id: 'pav_bhaji', name: 'पाव भाजी', price: 60 },
      { id: 'butter_pav_bhaji', name: 'बटर पावभाजी', price: 70 },
      { id: 'extra_pav', name: 'एक्स्ट्रा पाव', price: 20 },
      { id: 'extra_butter_pav', name: 'एक्स्ट्रा बटर पाव', price: 25 },
      { id: 'extra_bhaji', name: 'एक्स्ट्रा भाजी', price: 30 }
    ]
  },

{
    id: 'cake',
    label: 'केक ',
    icon: '🧈',
    items: [
     { id: 'candle10', name: 'मेणबत्ती', price: 10 },
     { id: 'pastry', name: 'पेस्ट्री', price: 40 },
     { id: 'cake150', name: 'केक', price: 150 },
     { id: 'cake200', name: 'केक', price: 200 },
     { id: 'cake250', name: 'केक', price: 250 },
     { id: 'cake300', name: 'केक', price: 300 },
     { id: 'cake350', name: 'केक', price: 350 },
     { id: 'cake400', name: 'केक', price: 400 },
     { id: 'cake450', name: 'केक', price: 450 },
     { id: 'cake500', name: 'केक', price: 500 },
     { id: 'cake550', name: 'केक', price: 550 },
     { id: 'cake600', name: 'केक', price: 600 }
      ]
  },
   
];

let MENU_CATEGORIES = [];
try {
    const savedMenu = localStorage.getItem('mghr_menu_data');
    if (savedMenu) MENU_CATEGORIES = JSON.parse(savedMenu);
    else MENU_CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_MENU_CATEGORIES));
} catch(e) {
    MENU_CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_MENU_CATEGORIES));
}

let FLAT_MENU = MENU_CATEGORIES.flatMap(c => c.items);

function saveMenuToLocal() {
    localStorage.setItem('mghr_menu_data', JSON.stringify(MENU_CATEGORIES));
    FLAT_MENU = MENU_CATEGORIES.flatMap(c => c.items);
}

const INVENTORY_TRANSACTIONS = [];

let inventory = JSON.parse(localStorage.getItem('mgpos_inventory') || 'null');
if (!inventory) {
  inventory = JSON.parse(JSON.stringify(INITIAL_INVENTORY));
  saveInventory();
}

let RECIPES = JSON.parse(localStorage.getItem('mgpos_recipes') || 'null');
if (!RECIPES) {
  RECIPES = JSON.parse(JSON.stringify(INITIAL_RECIPES));
  localStorage.setItem('mgpos_recipes', JSON.stringify(RECIPES));
} else {
  // Ensure new defaults are merged in
  let changed = false;
  Object.keys(INITIAL_RECIPES).forEach(key => {
    if (!RECIPES[key]) {
      RECIPES[key] = JSON.parse(JSON.stringify(INITIAL_RECIPES[key]));
      changed = true;
    }
  });
  if (changed) localStorage.setItem('mgpos_recipes', JSON.stringify(RECIPES));
}

let inventoryLog = JSON.parse(localStorage.getItem('mgpos_inventory_log') || '[]');

function saveInventory() {
  localStorage.setItem('mgpos_inventory', JSON.stringify(inventory));
  localStorage.setItem('mgpos_inventory_log', JSON.stringify(inventoryLog));
  updateStockAlertBadge();
}

function updateStockAlertBadge() {
    let lowCount = 0;
    Object.values(inventory).forEach(it => {
        if (it.currentStock <= it.minStock) lowCount++;
    });
    const badge = document.getElementById('admin-alert-badge');
    if (badge) {
        if (lowCount > 0) {
            badge.textContent = lowCount;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

const TABLE_LABELS = {
    takeaway: '📦 पार्सल',
    table1: '🪑 Table 1', table2: '🪑 Table 2', table3: '🪑 Table 3',
    table4: '🪑 Table 4', table5: '🪑 Table 5', table6: '🪑 Table 6',
    table7: '🪑 Table 7', table8: '🪑 Table 8', table9: '🪑 Table 9',
    table10: '🪑 Table 10', table11: '🪑 Table 11', table12: '🪑 Table 12',
    table13: '🪑 Table 13', table14: '🪑 Table 14', table15: '🪑 Table 15'
};

// --- STATE ---
let orders = JSON.parse(localStorage.getItem('mgpos_orders') || '{}');
let salesLog = JSON.parse(localStorage.getItem('mgpos_saleslog') || '[]');
let billCounter = parseInt(localStorage.getItem('mgpos_billcounter') || '1');
let gstEnabled = localStorage.getItem('mgpos_gst') === '1';
let syncUrl = localStorage.getItem('mgpos_sync_url') || '';
let syncMode = localStorage.getItem('mgpos_sync_mode') || 'realtime';
let syncStatus = 'idle';
let lastSyncTime = localStorage.getItem('mgpos_last_sync') || null;
let activeTableId = null;
let openCats = {};
let logCollapsed = false;
let waiterOrders = [];
let tempSyncMode = syncMode;

// --- HELPERS ---
function updateIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error("Lucide library is not defined. Checks your script import.");
    }
}

// --- INIT ---
window.addEventListener('load', () => {
    updateIcons();
    const clockEl = document.getElementById('clock');
    setInterval(() => {
        clockEl.textContent = new Date().toLocaleTimeString('en-IN', { hour12: false });
    }, 1000);

    // Sync Intervals
    setInterval(performSync, 1000 * 60 * 60); // Hourly
    setInterval(cleanupAndSyncCheck, 1000 * 60); // Periodic Check

    renderSidebar();
    renderLog();
    updateGstUI();
    initTheme();
    setupMQTT();
    updateStockAlertBadge();
});

function setDiscount(amt) {
    if (amt < 0) {
        showToast('Discount cannot be negative');
        renderOrderWindow();
        return;
    }
    const subtotal = calcSubtotal(orders[activeTableId]);
    if (amt > subtotal) {
        showToast('Discount cannot exceed subtotal');
        renderOrderWindow();
        return;
    }
    orders[activeTableId].discount = amt;
    save();
    renderOrderWindow();
}

// --- ADMIN PANEL ---
let adminActiveCat = null;
let adminActiveInvCat = null;

function switchAdminTab(tab) {
    const tabs = ['menu', 'inventory', 'dashboard', 'recipes'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        const view = document.getElementById(`admin-view-${t}`);
        if(btn) btn.className = `px-6 py-2 font-bold ${t === tab ? 'bg-[#D4A84B] text-black' : 'text-white hover:bg-white/10'}`;
        if(view) {
            if (t === tab) {
                view.classList.remove('hidden');
                view.classList.add('flex');
            } else {
                view.classList.add('hidden');
                view.classList.remove('flex');
            }
        }
    });

    if (tab === 'inventory') renderInvCats();
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'recipes') {
        renderRecipeMenu();
        populateRecipeIngredientSelect();
    }
}

function openAdmin() {
    document.getElementById('admin-panel').classList.remove('hidden');
    adminActiveCat = null;
    document.getElementById('admin-cat-title').textContent = 'Select Category';
    document.getElementById('btn-add-item').classList.add('hidden');
    document.getElementById('admin-items-header').classList.add('hidden');
    document.getElementById('admin-items').innerHTML = '';
    renderAdminCats();
    switchAdminTab('dashboard');
}
function closeAdmin() {
    document.getElementById('admin-panel').classList.add('hidden');
}

function renderDashboard() {
    let totalValue = 0;
    let lowCount = 0;
    const lowItems = [];
    
    Object.values(inventory).forEach(it => {
        totalValue += (it.currentStock || 0) * (it.costPerUnit || 0);
        if (it.currentStock <= it.minStock) {
            lowCount++;
            lowItems.push(it);
        }
    });

    document.getElementById('dash-total-value').textContent = `₹${totalValue.toFixed(2)}`;
    document.getElementById('dash-low-stock').textContent = `${lowCount} Items`;
    
    document.getElementById('dash-low-items').innerHTML = lowItems.map(it => `
        <div class="p-2 border-b border-white/5 flex justify-between items-center text-sm">
            <span class="${it.currentStock <= 0 ? 'text-red-500 font-bold' : 'text-white'}">${it.name}</span>
            <span class="${it.currentStock <= 0 ? 'text-red-500 font-bold' : 'text-yellow-500'}">${it.currentStock.toFixed(2)} ${it.unit}</span>
        </div>
    `).join('') || '<div class="text-white/40 text-sm p-4 text-center">All stock levels are normal.</div>';

    document.getElementById('dash-tx-log').innerHTML = inventoryLog.slice(-50).reverse().map(tx => `
        <div class="p-3 border-b border-white/5 flex justify-between items-center text-sm hover:bg-white/5 transition-colors">
            <div>
                <div class="font-bold uppercase text-white/80">${tx.type} ${tx.billNo ? `<span class="text-xs text-[#D4A84B] ml-2">Bill: ${tx.billNo}</span>` : ''}</div>
                <div class="text-[10px] text-white/40">${tx.date} ${tx.time}</div>
            </div>
            <div class="text-right">
                <div class="text-white/80 max-w-[150px] truncate">${inventory[tx.itemId] ? inventory[tx.itemId].name : tx.itemId}</div>
                <div class="${tx.quantity >= 0 ? 'text-green-500' : 'text-red-500'} font-mono">${tx.quantity > 0 ? '+' : ''}${tx.quantity.toFixed(3)}</div>
            </div>
        </div>
    `).join('') || '<div class="text-white/40 text-sm p-4 text-center">No transactions yet.</div>';
}

// ... Inventory logic ...
function renderInvCats() {
    const categories = ['vegetables', 'dairy', 'grains', 'pulses', 'spices', 'oils', 'beverages', 'nuts', 'packaging', 'prep'];
    const counts = {};
    categories.forEach(c => counts[c] = 0);
    Object.values(inventory).forEach(item => {
        if (counts[item.category] !== undefined) counts[item.category]++;
    });

    const list = document.getElementById('admin-inv-cats');
    list.innerHTML = categories.map(c => `
        <div onclick="selectInvCat('${c}')" class="p-3 border rounded cursor-pointer flex justify-between items-center transition-colors ${adminActiveInvCat === c ? 'bg-[#185e13] text-white font-bold border-[#185e13]' : 'bg-white/5 border-white/10 hover:border-white/30 text-white'} capitalize">
            <span>${c} (${counts[c]})</span>
        </div>
    `).join('');
}

function selectInvCat(cat) {
    adminActiveInvCat = cat;
    renderInvCats();
    document.getElementById('admin-inv-title').textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    document.getElementById('btn-add-inv-item').classList.remove('hidden');
    document.getElementById('admin-inv-items-header').classList.remove('hidden');
    renderInvItems();
}

function renderInvItems() {
    if (!adminActiveInvCat) return;
    const items = Object.values(inventory).filter(i => i.category === adminActiveInvCat);
    const list = document.getElementById('admin-inv-items');
    
    list.innerHTML = items.map(it => {
        const isLow = it.currentStock <= it.minStock;
        const lowStyles = isLow ? 'border-red-500/50 bg-red-500/10' : 'border-white/5 bg-white/5';
        
        return `
        <div class="grid grid-cols-[3fr_1.5fr_1.5fr_3fr_1fr] gap-4 items-center p-2 rounded border ${lowStyles}">
            <div>
              <div class="text-sm font-bold truncate">${it.name}</div>
              <div class="text-[10px] text-white/50">${it.id}</div>
            </div>
            
            <div class="flex items-center gap-1">
                <input type="number" value="${it.currentStock}" onchange="updateInvItem('${it.id}', 'currentStock', parseFloat(this.value))" class="w-16 bg-[#1C1C1C] border ${isLow ? 'border-red-500/50' : 'border-[#6b5656]'} rounded px-2 py-1 text-sm outline-none focus:border-[#D4A84B]">
                <span class="text-xs text-white/50">${it.unit}</span>
            </div>

            <div class="flex items-center gap-1">
                <input type="number" value="${it.minStock}" onchange="updateInvItem('${it.id}', 'minStock', parseFloat(this.value))" class="w-16 bg-[#1C1C1C] border border-[#6b5656] rounded px-2 py-1 text-sm outline-none focus:border-[#D4A84B]">
            </div>

            <div class="flex items-center gap-2">
                <button onclick="modifyStock('${it.id}', 'add')" class="bg-green-600/20 text-green-500 border border-green-500/30 px-2 py-1 flex-1 rounded text-xs hover:bg-green-600/40">+ Purchase</button>
                <button onclick="modifyStock('${it.id}', 'waste')" class="bg-red-600/20 text-red-500 border border-red-500/30 px-2 py-1 flex-1 rounded text-xs hover:bg-red-600/40">- Waste</button>
            </div>
            
            <div class="flex justify-end">
              <button onclick="deleteInvItem('${it.id}')" class="text-red-500 hover:text-red-700 bg-red-500/10 p-1.5 rounded flex items-center justify-center"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
        </div>
    `}).join('');
    updateIcons();
}

function modifyStock(id, type) {
    const it = inventory[id];
    let qtyStr = prompt(`Enter ${type === 'add' ? 'Purchased' : 'Wasted'} quantity (in ${it.unit}):`);
    if(!qtyStr) return;
    const q = parseFloat(qtyStr);
    if(isNaN(q) || q <= 0) return;
    
    if (type === 'add') {
        it.currentStock += q;
    } else {
        it.currentStock = Math.max(0, it.currentStock - q);
    }
    
    inventoryLog.push({
        date: new Date().toLocaleDateString('en-IN'),
        time: new Date().toLocaleTimeString('en-IN'),
        type: type === 'add' ? 'PURCHASE' : 'WASTE',
        itemId: id,
        quantity: type === 'add' ? q : -q
    });
    
    saveInventory();
    renderInvItems();
}

function updateInvItem(id, field, val) {
    if(isNaN(val)) return;
    inventory[id][field] = val;
    saveInventory();
    renderInvItems();
}

function deleteInvItem(id) {
    if(!confirm('Are you sure you want to delete this inventory item?')) return;
    delete inventory[id];
    saveInventory();
    renderInvItems();
    renderInvCats();
}

function addInvItem() {
    if(!adminActiveInvCat) return;
    const name = prompt("Enter Item Name:");
    if(!name) return;
    const unit = prompt("Enter Unit (kg, gm, liter, pieces):", "kg") || "kg";
    
    const idStr = adminActiveInvCat.substring(0,3) + '_' + Math.random().toString(36).substring(2,6);
    
    inventory[idStr] = {
        id: idStr,
        name: name,
        category: adminActiveInvCat,
        unit: unit,
        currentStock: 0,
        minStock: 5,
        maxStock: 50,
        costPerUnit: 0
    };
    saveInventory();
    renderInvItems();
    renderInvCats();
}

function renderAdminCats() {
    const list = document.getElementById('admin-cats');
    list.innerHTML = MENU_CATEGORIES.map(c => `
        <div onclick="selectAdminCat('${c.id}')" class="p-3 border rounded cursor-pointer flex justify-between items-center transition-colors ${adminActiveCat === c.id ? 'bg-[#D4A84B] text-black font-bold border-[#D4A84B]' : 'bg-white/5 border-white/10 hover:border-white/30 text-white'}">
            <span>${c.icon} ${c.label} (${c.items.length})</span>
            <button onclick="event.stopPropagation(); deleteAdminCat('${c.id}')" class="text-xs text-red-500 hover:text-red-700 bg-black/20 p-1 rounded px-2"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>
    `).join('');
    updateIcons();
}

function selectAdminCat(id) {
    adminActiveCat = id;
    renderAdminCats();
    const cat = MENU_CATEGORIES.find(c => c.id === id);
    document.getElementById('admin-cat-title').textContent = `${cat.icon} ${cat.label}`;
    document.getElementById('btn-add-item').classList.remove('hidden');
    document.getElementById('admin-items-header').classList.remove('hidden');
    renderAdminItems();
}

function renderAdminItems() {
    if (!adminActiveCat) return;
    const cat = MENU_CATEGORIES.find(c => c.id === adminActiveCat);
    const list = document.getElementById('admin-items');
    list.innerHTML = cat.items.map(it => `
        <div class="grid grid-cols-[3fr_1.5fr_1.5fr_1fr] gap-4 items-center bg-white/5 p-2 rounded border border-white/5">
            <input type="text" value="${it.name}" onchange="updateAdminItem('${it.id}', 'name', this.value)" class="bg-[#1C1C1C] border border-[#6b5656] rounded px-2 py-1 text-sm outline-none focus:border-[#D4A84B]">
            <input type="number" value="${it.price}" onchange="updateAdminItem('${it.id}', 'price', parseFloat(this.value))" class="bg-[#1C1C1C] border border-[#6b5656] rounded px-2 py-1 text-sm outline-none focus:border-[#D4A84B]">
            <div class="flex items-center gap-1">
                <input type="checkbox" ${it.trackStock ? 'checked' : ''} onchange="updateAdminItem('${it.id}', 'trackStock', this.checked)">
                <input type="number" value="${it.stock || 0}" ${it.trackStock ? '' : 'disabled'} onchange="updateAdminItem('${it.id}', 'stock', parseInt(this.value))" class="flex-1 bg-[#1C1C1C] border border-[#6b5656] rounded px-2 py-1 text-sm outline-none focus:border-[#D4A84B] disabled:opacity-50">
            </div>
            <button onclick="deleteAdminItem('${it.id}')" class="text-red-500 hover:text-red-700 bg-red-500/10 p-1.5 rounded flex items-center justify-center"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>
    `).join('');
    updateIcons();
}

function addAdminCategory() {
    const label = prompt("Enter Category Name:");
    if (!label) return;
    const icon = prompt("Enter Category Icon (Emoji):", "🍽️") || "🍽️";
    const id = 'cat_' + Date.now();
    MENU_CATEGORIES.push({ id, label, icon, items: [] });
    saveMenuToLocal();
    renderAdminCats();
    renderMenu();
}

function deleteAdminCat(id) {
    if (!confirm('Are you sure you want to delete this category? All its items will be lost.')) return;
    MENU_CATEGORIES = MENU_CATEGORIES.filter(c => c.id !== id);
    if(adminActiveCat === id) {
        adminActiveCat = null;
        document.getElementById('admin-cat-title').textContent = 'Select Category';
        document.getElementById('btn-add-item').classList.add('hidden');
        document.getElementById('admin-items-header').classList.add('hidden');
        document.getElementById('admin-items').innerHTML = '';
    }
    saveMenuToLocal();
    renderAdminCats();
    renderMenu();
}

function addAdminItem() {
    if (!adminActiveCat) return;
    const name = prompt("Enter Item Name:");
    if (!name) return;
    const price = parseFloat(prompt("Enter Item Price:") || "0");
    const id = 'item_' + Date.now();
    const cat = MENU_CATEGORIES.find(c => c.id === adminActiveCat);
    cat.items.push({ id, name, price, trackStock: false, stock: 0 });
    saveMenuToLocal();
    renderAdminItems();
    renderAdminCats();
    renderMenu();
}

function updateAdminItem(itemId, field, value) {
    if (!adminActiveCat) return;
    const cat = MENU_CATEGORIES.find(c => c.id === adminActiveCat);
    const item = cat.items.find(it => it.id === itemId);
    if (item) {
        item[field] = value;
        saveMenuToLocal();
        if (field === 'trackStock') {
            renderAdminItems();
        }
        renderMenu();
    }
}

function deleteAdminItem(itemId) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    if (!adminActiveCat) return;
    const cat = MENU_CATEGORIES.find(c => c.id === adminActiveCat);
    cat.items = cat.items.filter(it => it.id !== itemId);
    saveMenuToLocal();
    renderAdminItems();
    renderAdminCats();
    renderMenu();
}

// --- CORE FUNCTIONS ---
function save() {
    const staticOrders = {};
    Object.keys(orders).forEach(k => { if(!k.startsWith('edit_')) staticOrders[k] = orders[k]; });
    localStorage.setItem('mgpos_orders', JSON.stringify(staticOrders));
    localStorage.setItem('mgpos_saleslog', JSON.stringify(salesLog));
    localStorage.setItem('mgpos_billcounter', billCounter);
    localStorage.setItem('mgpos_gst', gstEnabled ? '1' : '0');
    localStorage.setItem('mgpos_sync_url', syncUrl);
    localStorage.setItem('mgpos_sync_mode', syncMode);
    localStorage.setItem('mgpos_last_sync', lastSyncTime);
}

function cleanupAndSyncCheck() {
    // If daywise mode, check for yesterday's bills
    if (syncMode === 'daywise') {
        const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        if (salesLog.some(e => e.date !== todayStr && !e.synced)) {
            performSync();
        }
    } else {
        if (salesLog.some(e => !e.synced)) performSync();
    }
}

async function performSync(manual = false) {
    if (!syncUrl) {
        if(manual) showToast('Please set Sync URL in Settings');
        return;
    }
    if (syncStatus === 'syncing') return;
    
    const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    let toSync = [];

    if (syncMode === 'realtime' || manual) {
        toSync = salesLog.filter(e => !e.synced);
    } else {
        toSync = salesLog.filter(e => e.date !== todayStr && !e.synced);
    }

    if (toSync.length === 0) return;

    setSyncStatus('syncing');
    try {
        // Batch of 10
        const batchSize = 10;
        for (let i = 0; i < toSync.length; i += batchSize) {
            const batch = toSync.slice(i, i + batchSize);
            await fetch(syncUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(batch),
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        const now = Date.now();
        toSync.forEach(s => {
            const entry = salesLog.find(e => e.billNo === s.billNo);
            if (entry) {
                entry.synced = true;
                entry.syncTimestamp = now;
            }
        });

        if (syncMode === 'daywise' && !manual) {
            salesLog = salesLog.filter(e => e.date === todayStr || !e.synced);
        }

        lastSyncTime = new Date().toLocaleTimeString('en-IN', { hour12: false });
        setSyncStatus('success');
        save();
        renderLog();
        setTimeout(() => setSyncStatus('idle'), 10000);
    } catch (err) {
        console.error(err);
        setSyncStatus('error');
    }
}

function setSyncStatus(st) {
    syncStatus = st;
    const container = document.getElementById('sync-indicator');
    const modalStatus = document.getElementById('modal-sync-status');
    const modalTime = document.getElementById('modal-last-sync');
    
    if (modalStatus) modalStatus.textContent = st;
    if (modalTime) modalTime.textContent = lastSyncTime || 'Never';

    if (!container) return;
    container.innerHTML = '';
    if (st === 'syncing') {
        container.innerHTML = `<i data-lucide="rotate-cw" class="w-3.5 h-3.5 text-amber-500 animate-spin"></i>`;
    } else if (st === 'success') {
        container.innerHTML = `<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-green-500"></i>`;
    } else if (st === 'error') {
        container.innerHTML = `<i data-lucide="alert-circle" class="w-3.5 h-3.5 text-red-500"></i>`;
    } else {
        container.innerHTML = `<i data-lucide="cloud" class="w-3.5 h-3.5 text-white/20"></i>`;
    }
    updateIcons();
}

// --- UI RENDERING ---
function renderSidebar() {
    const parcelEl = document.getElementById('parcel-container');
    const tablesEl = document.getElementById('tables-container');
    const chipsEl = document.getElementById('minimized-chips');

    const parcelOrder = orders.takeaway;
    const parcelHasItems = parcelOrder?.items.length > 0;
    const parcelTotal = parcelHasItems ? (calcSubtotal(parcelOrder) * (gstEnabled ? 1.05 : 1) - (parcelOrder.discount || 0)).toFixed(0) : 0;

    parcelEl.innerHTML = `
        <button onclick="openOrder('takeaway')" class="w-full flex items-center gap-2 p-2 rounded border border-transparent transition-all text-left mb-2 ${activeTableId === 'takeaway' ? 'bg-[#1C1C1C] border-[#8A6E2F]' : 'bg-[#0d2501] border-[#6b5656]'}">
            <i data-lucide="package" class="w-4 h-4 text-[#D4A84B]"></i>
            <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold">पार्सल</div>
                <div class="text-[11px] truncate flex flex-row items-center gap-1.5">
                    ${parcelHasItems ? `<span class="text-[#D4A84B] font-bold font-mono text-xs">₹${parcelTotal}</span>` : ''}
                    <span class="text-white/50">${parcelOrder?.items.length || 0} item(s)</span>
                </div>
            </div>
            <div class="w-1.5 h-1.5 rounded-full ${parcelHasItems ? 'bg-[#D4A84B]' : 'bg-[#6b5656]'}"></div>
        </button>
    `;

    tablesEl.innerHTML = Object.entries(TABLE_LABELS).map(([id, label]) => {
        if (id === 'takeaway') return '';
        const order = orders[id];
        const hasItems = order?.items.length > 0;
        const total = hasItems ? (calcSubtotal(order) * (gstEnabled ? 1.05 : 1) - (order.discount || 0)).toFixed(0) : 0;
        return `
            <button onclick="openOrder('${id}')" class="w-full flex items-center gap-2 p-2 rounded border border-transparent transition-all text-left group ${activeTableId === id ? 'bg-[#1C1C1C] border-white/40' : hasItems ? 'bg-[#1C1C1C] border-[#8A6E2F]' : 'hover:bg-[#1C1C1C]'}">
                <div class="w-4 flex justify-center opacity-60">🪑</div>
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-semibold">${label.replace('🪑', '')}</div>
                    <div class="text-[11px] truncate flex flex-row items-center gap-1.5">
                        ${hasItems ? `<span class="text-[#D4A84B] font-bold font-mono text-xs">₹${total}</span>` : ''}
                        <span class="text-white/50">${hasItems ? order.items.length + ' item(s)' : 'Empty'}</span>
                    </div>
                </div>
                <div class="w-1.5 h-1.5 rounded-full ${hasItems ? 'bg-[#D4A84B]' : 'bg-[#6b5656]'}"></div>
            </button>
        `;
    }).join('');

    chipsEl.innerHTML = Object.entries(orders).filter(([id, o]) => o.minimized).map(([id, o]) => {
        if (id === 'null' || id === 'undefined') {
            delete orders[id];
            return '';
        }
        const hasItems = o.items.length > 0;
        const total = calcSubtotal(o) * (gstEnabled ? 1.05 : 1) - (o.discount || 0);
        const label = id.startsWith('edit_') ? `✏️ ${o._originalBillNo}` : TABLE_LABELS[id];
        if (!label) return ''; // Skip invalid tables
        return `
        <div class="mini-chip ${hasItems ? 'has-items' : ''}" onclick="openOrder('${id}')">
            <span>${label}</span>
            ${hasItems ? `<span class="mini-chip-total">₹${total.toFixed(0)}</span>` : ''}
            <button class="mini-chip-close" onclick="event.stopPropagation(); closeOrder('${id}')" title="Close">✕</button>
        </div>
        `;
    }).join('');

    updateIcons();
}

function renderLog() {
    const content = document.getElementById('log-content');
    const totalEl = document.getElementById('today-total');
    
    const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const todayTotal = salesLog.reduce((s, e) => s + (e.date === todayStr ? e.total : 0), 0);
    totalEl.textContent = `₹${todayTotal.toFixed(2)}`;

    content.innerHTML = salesLog.length === 0 ? `<div class="text-white/20 text-center py-10 italic">Empty sales log</div>` : 
        [...salesLog].reverse().map(e => {
            const badges = [];
            if (e.edited) badges.push('<span class="text-[9px] bg-red-500/20 text-red-400 px-1 rounded border border-red-500/30">EDITED</span>');
            if (e.reprinted) badges.push('<span class="text-[9px] bg-blue-500/20 text-blue-400 px-1 rounded border border-blue-500/30">REPRINTED</span>');
            return `
        <div class="p-3 bg-[#1C1C1C] border border-[#6b5656] rounded-lg group animate-in">
            <div class="flex border-b border-white/5 pb-1 mb-2 items-start justify-between gap-2">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-[10px] bg-[#D4A84B] text-black px-1.5 rounded font-bold">${e.billNo}</span>
                    ${badges.join('')}
                </div>
                <div class="flex items-center gap-2 shrink-0">
                     ${e.synced ? `<i data-lucide="cloud" class="w-3 h-3 text-[#D4A84B]"></i>` : `<i data-lucide="cloud-off" class="w-3 h-3 text-red-500"></i>`}
                     <span class="text-[10px] text-white/40">${e.time}</span>
                </div>
            </div>
            <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-bold">${e.label}</span>
                <span class="font-mono text-[#D4A84B]">₹${e.total.toFixed(0)}</span>
            </div>
            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onclick="reprint('${e.billNo}')" class="text-[10px] underline hover:text-[#D4A84B]">Reprint</button>
                 <button onclick="editBill('${e.billNo}')" class="text-[10px] underline hover:text-[#D4A84B]">Edit</button>
            </div>
        </div>
        `}).join('');
    updateIcons();
}

function renderOrderWindow() {
    const win = document.getElementById('order-window');
    const empty = document.getElementById('empty-state');
    
    if (!activeTableId) {
        win.classList.add('hidden');
        empty.classList.remove('hidden');
        return;
    }
    
    win.classList.remove('hidden');
    empty.classList.add('hidden');

    const order = orders[activeTableId];
    const subtotal = calcSubtotal(order);
    const total = subtotal + (gstEnabled ? subtotal * 0.05 : 0) - (order.discount || 0);

    const isEdit = activeTableId.startsWith('edit_');
    const tableLabel = isEdit ? `✏️ Editing ${orders[activeTableId]._originalBillNo}` : TABLE_LABELS[activeTableId];

    win.innerHTML = `
        <div class="flex items-center gap-3 px-5 py-3 bg-[#1C1C1C] border-b border-[#6b5656] shrink-0">
            <span class="text-lg opacity-80">${activeTableId === 'takeaway' ? '📦' : '🪑'}</span>
            <span class="flex-1 text-lg font-bold">${tableLabel}</span>
            <div class="font-mono text-xl font-bold text-[#D4A84B]">₹${total.toFixed(2)}</div>
            <button onclick="closeOrderActive()" class="p-1.5 rounded hover:bg-red-500/20 text-white/50 hover:text-red-500 transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>
        <div class="flex-1 flex flex-col md:flex-row overflow-hidden">
            <div class="w-full md:w-[45%] flex flex-col border-b md:border-b-0 md:border-r border-[#6b5656] bg-black/20 md:h-full h-[40vh] shrink-0">
                <div class="p-3 border-b border-white/10 flex flex-col gap-2">
                    <input type="text" id="menu-search" oninput="renderMenu()" placeholder="Search menu..." class="w-full bg-[#1C1C1C] border border-[#6b5656] rounded px-3 py-2 text-sm focus:border-[#D4A84B] outline-none">
                    <div class="flex gap-2 items-center bg-[#111] p-1.5 rounded border border-[#6b5656]">
                        <input type="text" id="custom-name" placeholder="Custom item..." class="flex-1 bg-transparent px-2 py-1 text-xs outline-none" onkeydown="if(event.key==='Enter') addCustomItem()">
                        <span class="text-white/40 text-xs">₹</span>
                        <input type="number" id="custom-price" placeholder="0" min="0" class="w-16 bg-transparent px-1 py-1 text-xs outline-none" onkeydown="if(event.key==='Enter') addCustomItem()">
                        <button onclick="addCustomItem()" class="text-[10px] font-bold bg-[#D4A84B] text-black px-2 py-1 rounded hover:bg-[#b58c38] whitespace-nowrap">+ ADD</button>
                    </div>
                </div>
                <div id="menu-list" class="flex-1 overflow-y-auto p-3 scrollbar-thin"></div>
            </div>
            <div class="flex-1 flex flex-col bg-black overflow-y-auto scrollbar-thin">
                <div class="min-h-full flex flex-col">
                    <div id="order-items" class="p-4 flex flex-col gap-2"></div>
                    <div class="mt-auto p-4 bg-[#111] border-t border-[#6b5656] grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between text-xs text-white/40"><span>Subtotal</span><span>₹${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-xs text-white/40"><span>GST 5%</span><span>₹${(gstEnabled ? subtotal * 0.05 : 0).toFixed(2)}</span></div>
                        <div class="flex justify-between items-center text-xs text-white/40 mt-1">
                            <span>Discount</span>
                            <div class="flex items-center gap-1">
                                <span>₹</span>
                                <input type="number" tabindex="-1" class="w-16 bg-[#1C1C1C] border border-[#6b5656] rounded px-1 py-0.5 text-right outline-none text-white focus:border-[#D4A84B]" 
                                    value="${order.discount || 0}" 
                                    onchange="setDiscount(parseFloat(this.value) || 0)"
                                    onclick="this.select()"
                                >
                            </div>
                        </div>
                        <div class="flex justify-between font-bold text-[16px] text-[#D4A84B] mt-1 pt-1 border-t border-white/5"><span>TOTAL</span><span>₹${total.toFixed(2)}</span></div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button onclick="printBillActive()" class="flex-1 bg-green-600 text-white rounded font-bold hover:brightness-110 py-3 flex items-center justify-center gap-2">
                            <i data-lucide="printer" class="w-4 h-4"></i> PRINT & SETTLE
                        </button>
                        <button onclick="clearOrderActive()" class="py-2 text-xs text-red-500 hover:bg-red-500/10 rounded border border-red-500/20">CLEAR ALL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    renderMenu();
    renderOrderItems();
    updateIcons();
}

function renderMenu() {
    const list = document.getElementById('menu-list');
    if (!list) return;

    const searchEl = document.getElementById('menu-search');
    const search = searchEl ? searchEl.value.toLowerCase().trim() : '';
    
    function _hl(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    if (search.trim()) {
        const q = search.trim().toLowerCase();
        const matches = FLAT_MENU.filter(m => m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q));
        if (!matches.length) {
            list.innerHTML = '<div style="font-size:11px;color:#aaa;padding:6px">No items found</div>';
            return;
        }
        list.innerHTML = `<div class="search-results flex">` + matches.map(item => `
            <div class="menu-chip" onclick="addItem('${activeTableId}','${item.id}')">
                <span class="menu-chip-name">${_hl(item.name, search.trim())}</span>
                <span class="menu-chip-price">₹${item.price || '—'}</span>
            </div>
        `).join('') + `</div>`;
    } else {
        list.innerHTML = `<div class="menu-panel-inner" id="catscroll-${activeTableId}">
            <div style="display:flex;flex-wrap:wrap;gap:4px;">
              ${MENU_CATEGORIES.map(cat => `
                <div style="display:contents">
                  <div class="cat-header group ${openCats[cat.id] ? 'active' : ''}" id="cathdr-${activeTableId}-${cat.id}"
                    onclick="toggleCat('${cat.id}')">
                    <div class="flex items-center gap-2">
                        <span class="cat-icon">${cat.icon}</span>
                        <span class="cat-name">${cat.label}</span>
                        <span class="cat-count text-xs opacity-50">(${cat.items.length})</span>
                    </div>
                    <span class="transition-transform duration-200" style="font-size:9px;">${openCats[cat.id] ? '▲' : '▼'}</span>
                  </div>
                  <div class="cat-items ${openCats[cat.id] ? '' : 'hidden'}" id="catitems-${activeTableId}-${cat.id}">
                    ${cat.items.map(item => `
                      <div class="menu-chip" onclick="addItem('${activeTableId}','${item.id}')">
                        <span class="menu-chip-name">${item.name}</span>
                        <span class="menu-chip-price">₹${item.price}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
        </div>`;
    }
}

function renderOrderItems() {
    const list = document.getElementById('order-items');
    const order = orders[activeTableId];
    if (!order || order.items.length === 0) {
        list.innerHTML = `<div class="text-center text-white/20 py-10 opacity-50">Empty</div>`;
        return;
    }
    list.innerHTML = order.items.map((it, idx) => {
        const m = FLAT_MENU.find(x => x.id === it.id);
        const name = m ? m.name : (it.name || it.id);
        const price = m ? m.price : (it.price || 0);
        return `
            <div class="flex items-center gap-3 p-2 bg-[#1C1C1C] border border-yellow-500 rounded-lg group">
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium truncate">${name}</div>
                    <div class="text-[10px] text-white/40">₹${price} / unit</div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button onclick="changeQty('${activeTableId}', ${idx}, -1)" class="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-red-500/20">-</button>
                    <span class="w-6 text-center font-mono font-bold">${it.qty}</span>
                    <button onclick="changeQty('${activeTableId}', ${idx}, 1)" class="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-green-500/20">+</button>
                </div>
                <div class="w-16 text-right font-mono text-[#D4A84B] shrink-0">₹${price * it.qty}</div>
                <button onclick="removeItem('${activeTableId}', ${idx})" class="p-1.5 text-white/20 hover:text-red-500 shrink-0"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
        `;
    }).join('');
    updateIcons();
}

// --- HANDLERS ---
function openOrder(id) { 
    if (activeTableId && activeTableId !== id && orders[activeTableId]) {
        orders[activeTableId].minimized = true;
    }
    activeTableId = id;
    if (id) {
        if(!orders[id]) orders[id] = { items: [], notes: '', minimized: false, discount: 0 };
        orders[id].minimized = false;
    }
    renderSidebar();
    renderOrderWindow();
}

function addItem(tableId, itemId) {
    const o = orders[tableId];
    const itemDef = FLAT_MENU.find(m => m.id === itemId);
    
    if (itemDef && itemDef.trackStock) {
        const existing = o.items.find(it => it.id === itemId);
        const nextQty = (existing ? existing.qty : 0) + 1;
        if (itemDef.stock < nextQty) {
            showToast(`Not enough stock! Only ${itemDef.stock} left.`);
            return;
        }
    }

    const existing = o.items.find(it => it.id === itemId);
    if (existing) existing.qty++;
    else o.items.push({ id: itemId, qty: 1, kotSelected: true, kotSentQty: 0 });
    save();
    renderSidebar();
    if(activeTableId === tableId) renderOrderWindow();
}

function addCustomItem() {
    if (!activeTableId) return;
    const nameInput = document.getElementById('custom-name');
    const priceInput = document.getElementById('custom-price');
    if (!nameInput || !priceInput) return;
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value) || 0;
    
    if (!name) return;
    
    const o = orders[activeTableId];
    const customId = 'custom_' + Date.now();
    o.items.push({ id: customId, name: name, price: price, qty: 1, custom: true, kotSelected: true, kotSentQty: 0 });
    
    nameInput.value = '';
    priceInput.value = '';
    
    save();
    renderSidebar();
    renderOrderWindow();
}

function changeQty(tid, idx, d) {
    const it = orders[tid].items[idx];
    if (d > 0) {
        const itemDef = FLAT_MENU.find(m => m.id === it.id);
        if (itemDef && itemDef.trackStock) {
            const nextQty = it.qty + d;
            if (itemDef.stock < nextQty) {
                showToast(`Not enough stock! Only ${itemDef.stock} left.`);
                return;
            }
        }
    }

    orders[tid].items[idx].qty += d;
    if(orders[tid].items[idx].qty <= 0) orders[tid].items.splice(idx, 1);
    save();
    renderSidebar();
    renderOrderWindow();
}

function removeItem(tid, idx) {
    orders[tid].items.splice(idx, 1);
    save();
    renderSidebar();
    renderOrderWindow();
}

function minimizeAll() {
    Object.keys(orders).forEach(k => { if(!k.startsWith('edit_')) orders[k].minimized = true; });
    save();
    renderSidebar();
    openOrder(null);
}

function toggleLog() {
    const panel = document.getElementById('log-panel');
    const icon = document.getElementById('log-toggle-icon');
    
    panel.classList.toggle('collapsed');
    icon.classList.toggle('rotate-90');
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('mgpos_theme', isLight ? 'light' : 'dark');
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
        if (window.lucide) window.lucide.createIcons();
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('mgpos_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const icon = document.getElementById('theme-icon');
        if(icon) icon.setAttribute('data-lucide', 'moon');
    }
}

function toggleGst() { gstEnabled = !gstEnabled; save(); updateGstUI(); if(activeTableId) renderOrderWindow(); }
function updateGstUI() {
    const toggle = document.getElementById('gst-toggle');
    const nob = document.getElementById('gst-nob');
    if(gstEnabled) { toggle.classList.replace('bg-[#6b5656]', 'bg-[#D4A84B]'); nob.style.left = '20px'; }
    else { toggle.classList.replace('bg-[#D4A84B]', 'bg-[#6b5656]'); nob.style.left = '2px'; }
}

function toggleCat(cid) { openCats[cid] = !openCats[cid]; renderMenu(); }
function closeOrderActive() { orders[activeTableId].minimized = true; activeTableId = null; save(); renderSidebar(); renderOrderWindow(); }
function clearOrderActive() { if(confirm('Clear items?')) { orders[activeTableId].items = []; save(); renderSidebar(); renderOrderWindow(); } }

function closeOrder(id) {
    if (orders[id] && orders[id].items.length > 0) {
        if (!confirm('Order has items. Close anyway?')) return;
    }
    delete orders[id];
    if (activeTableId === id) activeTableId = null;
    save();
    renderSidebar();
    renderOrderWindow();
}

function showToast(m) {
    const t = document.getElementById('toast');
    t.textContent = m;
    t.classList.replace('opacity-0', 'opacity-100');
    t.classList.replace('pointer-events-none', 'pointer-events-auto');
    setTimeout(() => { t.classList.replace('opacity-100', 'opacity-0'); t.classList.replace('pointer-events-auto', 'pointer-events-none'); }, 3000);
}

function calcSubtotal(o) { return o.items.reduce((s, it) => {
    const m = FLAT_MENU.find(x => x.id === it.id);
    const price = m ? m.price : (it.price || 0);
    return s + (price * it.qty);
}, 0); }

// --- PRINT & SETTLE ---
let pendingBill = null;
function printBillActive() {
    const o = orders[activeTableId];
    if(!o || !o.items.length) return;
    const subtotal = calcSubtotal(o);
    const gstAmt = gstEnabled ? Math.round(subtotal * 0.05) : 0;
    const total = subtotal + gstAmt - (o.discount || 0);

    const isEdit = activeTableId.startsWith('edit_');
    const now = new Date();
    const dateStr = isEdit ? o._originalDate : now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = isEdit ? o._originalTime : now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    const billNo = isEdit ? o._originalBillNo : `MG${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(billCounter).padStart(4, '0')}`;
    const tableId = isEdit ? o._originalTableId : activeTableId;
    const label = isEdit ? o._originalLabel : TABLE_LABELS[activeTableId];

    pendingBill = {
        billNo, tableId, label, date: dateStr, time: timeStr,
        items: o.items.map(it => {
            const m = FLAT_MENU.find(x=>x.id===it.id);
            const name = m ? m.name : (it.name || it.id);
            return `${name}(${it.qty})`;
        }),
        snapshot: JSON.parse(JSON.stringify(o.items)),
        subtotal, gstAmt, discount: o.discount, total, synced: false,
        gstEnabled, notes: o.notes || '',
        edited: isEdit,
        _editIdx: isEdit ? o._editIdx : undefined
    };

    const itemRows = o.items.map(it => {
        const m = FLAT_MENU.find(x=>x.id===it.id);
        const name = m ? m.name : (it.name || it.id);
        const price = m ? m.price : (it.price || 0);
        const amt = price * it.qty;
        return `<div class="r-row r-bold"><span>${name}</span><span></span></div>
                <div class="r-row r-bold" style="padding-left:12px"><span style="font-size:14px;color:#000">${it.qty} × ₹${price}</span><span>₹${amt.toFixed(0)}</span></div>`;
    }).join('');

    const html = `
      <div class="r-center" style="margin-bottom:6px">
        ${isEdit ? '<span class="r-bold" style="font-size:12px;border:1px solid #000;padding:2px 6px;border-radius:4px;">*** EDITED BILL ***</span>' : ''}
      </div>
      <div class="r-center r-bold" style="font-size:13px">MAA GAYATRI HOTEL & RESTAURANT</div>
      <div class="r-center r-bold"> आपले आपूलकीचे ठिकाण</div>
      <hr class="r-line">
      <div class="r-row r-bold"><span>Bill No:</span><span>${billNo}</span></div>
      <div class="r-row r-bold"><span>Date:</span><span>${dateStr} ${timeStr}</span></div>
      <div class="r-row r-bold"><span>Type:</span><span>${label}</span></div>
      ${o.notes ? `<div class="r-bold" style="margin-top:3px">Note: ${o.notes}</div>` : ''}
      <hr class="r-line">
      <div class="r-row r-bold"><span>ITEM</span><span>AMT</span></div>
      <hr class="r-line">
      ${itemRows}
      <hr class="r-line">
      <div class="r-row r-bold"><span>Subtotal</span><span>₹${subtotal.toFixed(2)}</span></div>
      ${gstEnabled
        ? `<div class="r-row r-bold"><span>GST @ 5%</span><span>₹${gstAmt.toFixed(2)}</span></div>`
        : ``}
      ${o.discount > 0 ? `<div class="r-row r-bold"><span>Discount</span><span>-₹${o.discount.toFixed(2)}</span></div>` : ''}
      <hr class="r-solid">
      <div class="r-row r-bold r-total"><span>GRAND TOTAL</span><span>₹${total.toFixed(2)}</span></div>
      <hr class="r-solid">
      <div class="r-center r-bold" style="margin-top:6px">धन्यवाद! — पुन्हा भेटूया —</div>
    `;

    document.getElementById('print-preview-content').innerHTML = html;
    
    // Reset print button back to doPrint
    const buttons = document.querySelectorAll('#print-overlay button');
    for (let b of buttons) {
        // Find the primary button (it will be the first one, styled with green bg usually or has printer icon)
        // We know it's the one we modify because it's not the cancel button string
        if (!b.textContent.includes('CANCEL')) {
            b.setAttribute('onclick', 'doPrint()');
            b.innerHTML = `<i data-lucide="printer" class="w-5 h-5"></i> PRINT BILL (Enter)`;
        }
    }
    updateIcons();
    
    document.getElementById('print-overlay').classList.remove('hidden');
}

function doActualPrint() {
    const htmlContent = document.getElementById('print-preview-content').innerHTML;
    const frame = document.getElementById('printFrame');
    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(`
        <html>
        <head>
            <style>
                body { font-family: 'Courier New', Courier, monospace; font-size: 13px; color: black; background: white; margin: 0; padding: 10px; }
                .r-center { text-align: center; }
                .r-bold { font-weight: 700; }
                .r-line { border: none; border-top: 1px dashed black; margin: 7px 0; }
                .r-solid { border: none; border-top: 2px solid black; margin: 7px 0; }
                .r-row { display: flex; justify-content: space-between; margin: 3px 0; }
                .r-total { font-size: 18px; font-weight: 800; }
            </style>
        </head>
        <body>
            ${htmlContent}
        </body>
        </html>
    `);
    doc.close();
    
    setTimeout(() => {
        frame.contentWindow.focus();
        frame.contentWindow.print();
    }, 250);
}

function doPrint() {
    doActualPrint();

    if (pendingBill.edited && pendingBill._editIdx !== undefined) {
        // Handle diff in stock for edited bills? For simple tracking, we'll skip diffing to avoid complexity.
        salesLog[pendingBill._editIdx] = pendingBill;
        const editId = activeTableId;
        orders[editId].items = [];
        delete orders[editId];
        
        save();
        renderSidebar();
        renderLog();
        closePrint();
        
        const realKeys = Object.keys(orders).filter(k => !k.startsWith('edit_'));
        if (realKeys.length === 0) {
            openOrder(null);
        } else {
            openOrder(realKeys[realKeys.length - 1]);
        }
    } else {
        // Deduct inventory
        if (pendingBill.snapshot) {
            let stockChanged = false;
            pendingBill.snapshot.forEach(it => {
                const itemDef = MENU_CATEGORIES.flatMap(c => c.items).find(m => m.id === it.id);
                if (itemDef && itemDef.trackStock) {
                    itemDef.stock = Math.max(0, (itemDef.stock || 0) - it.qty);
                    stockChanged = true;
                }
            });
            if (stockChanged) {
                saveMenuToLocal();
            }
            
            // Comprehensive Inventory deduction for recipes and raw materials
            deductInventoryOnBilling(pendingBill.snapshot, pendingBill.billNo);
        }

        salesLog.push(pendingBill);
        billCounter++;
        orders[activeTableId].items = []; // Clear items after printing
        
        // --- Publish to Sales Viewer ---
        if (window.salesMqttClient) {
            const payload = {
                billNo: pendingBill.billNo,
                total: pendingBill.total,
                label: pendingBill.label || activeTableId,
                timestamp: Date.now()
            };
            // QoS 1 guarantees delivery to broker, broker queues for offline connected-clients
            window.salesMqttClient.publish('mghr/sales/v1', JSON.stringify(payload), { qos: 1 });
        }

        save();
        renderSidebar();
        renderLog();
        closePrint();
        renderOrderWindow();
    }
    
    showToast('Printed Successfully');
    performSync();
}

function closePrint() { document.getElementById('print-overlay').classList.add('hidden'); pendingBill = null; }

function reprint(billNo) {
    const e = salesLog.find(x => x.billNo === billNo);
    if (!e) return;
    if (!e.snapshot) { showToast('Old bill - cannot reprint'); return; }

    e.reprinted = true;
    save();
    renderLog();

    const itemRows = e.snapshot.map(it => {
        const m = FLAT_MENU.find(x=>x.id===it.id);
        const name = m ? m.name : (it.name || it.id);
        const price = m ? m.price : (it.price || 0);
        const amt = price * it.qty;
        return `<div class="r-row r-bold"><span>${name}</span><span></span></div>
                <div class="r-row r-bold" style="padding-left:12px"><span style="font-size:14px;color:#000">${it.qty} × ₹${price}</span><span>₹${amt.toFixed(0)}</span></div>`;
    }).join('');

    const html = `
      <div class="r-center" style="margin-bottom:6px">
        <span class="r-bold" style="font-size:12px;border:1px solid #000;padding:2px 6px;border-radius:4px;">*** DUPLICATE / REPRINT ***</span>
      </div>
      <div class="r-center r-bold" style="font-size:13px">MAA GAYATRI HOTEL & RESTAURANT</div>
      <div class="r-center r-bold"> आपले आपूलकीचे ठिकाण</div>
      <hr class="r-line">
      <div class="r-row r-bold"><span>Bill No:</span><span>${e.billNo}</span></div>
      <div class="r-row r-bold"><span>Date:</span><span>${e.date} ${e.time}</span></div>
      <div class="r-row r-bold"><span>Type:</span><span>${e.label}</span></div>
      ${e.notes ? `<div class="r-bold" style="margin-top:3px">Note: ${e.notes}</div>` : ''}
      <hr class="r-line">
      <div class="r-row r-bold"><span>ITEM</span><span>AMT</span></div>
      <hr class="r-line">
      ${itemRows}
      <hr class="r-line">
      <div class="r-row r-bold"><span>Subtotal</span><span>₹${e.subtotal.toFixed(2)}</span></div>
      ${e.gstEnabled
        ? `<div class="r-row r-bold"><span>GST @ 5%</span><span>₹${e.gstAmt.toFixed(2)}</span></div>`
        : ``}
      ${e.discount > 0 ? `<div class="r-row r-bold"><span>Discount</span><span>-₹${e.discount.toFixed(2)}</span></div>` : ''}
      <hr class="r-solid">
      <div class="r-row r-bold r-total"><span>GRAND TOTAL</span><span>₹${e.total.toFixed(2)}</span></div>
      <hr class="r-solid">
      <div class="r-center r-bold" style="margin-top:6px">धन्यवाद! — पुन्हा भेटूया —</div>
    `;

    document.getElementById('print-preview-content').innerHTML = html;
    
    // Convert print button to close (visual reprint only)
    const buttons = document.querySelectorAll('#print-overlay button');
    for (let b of buttons) {
        if (!b.textContent.includes('CANCEL')) {
            b.setAttribute('onclick', 'doReprintActual()');
            b.innerHTML = `<i data-lucide="printer" class="w-5 h-5"></i> PRINT DUPLICATE`;
        }
    }
    updateIcons();
    
    document.getElementById('print-overlay').classList.remove('hidden');
}

function doReprintActual() {
    doActualPrint();
    closePrint();
}

function editBill(billNo) {
    const logIdx = salesLog.findIndex(x => x.billNo === billNo);
    const e = salesLog[logIdx];
    if (!e || !e.snapshot) { showToast('Old bill - cannot edit'); return; }

    const editId = 'edit_' + logIdx;

    orders[editId] = {
        items: e.snapshot.map(it => ({
            id: it.id,
            name: it.name,
            price: it.price,
            qty: it.qty,
            custom: it.custom || false,
            kotSelected: false,
            kotSentQty: it.qty
        })),
        notes: e.notes || '',
        discount: e.discount || 0,
        minimized: false,
        _editIdx: logIdx,
        _originalBillNo: e.billNo,
        _originalDate: e.date,
        _originalTime: e.time,
        _originalTableId: e.tableId,
        _originalLabel: e.label
    };

    openOrder(editId);
    showToast('✏️ Editing bill ' + e.billNo);
}

// --- SETTINGS ---
function openSettings() {
    document.getElementById('sync-url-input').value = syncUrl;
    tempSyncMode = syncMode;
    document.getElementById('settings-modal').classList.remove('hidden');
    renderSettingsUI();
    setSyncStatus(syncStatus);
}
function closeSettings() { document.getElementById('settings-modal').classList.add('hidden'); }
function setTempMode(m) { tempSyncMode = m; renderSettingsUI(); }
function renderSettingsUI() {
    const rt = document.getElementById('mode-realtime');
    const dw = document.getElementById('mode-daywise');
    const desc = document.getElementById('mode-desc');
    rt.className = tempSyncMode === 'realtime' ? 'flex-1 py-2 text-xs font-bold rounded-md bg-[#D4A84B] text-black' : 'flex-1 py-2 text-xs font-bold rounded-md text-white/40 hover:text-white';
    dw.className = tempSyncMode === 'daywise' ? 'flex-1 py-2 text-xs font-bold rounded-md bg-[#D4A84B] text-black' : 'flex-1 py-2 text-xs font-bold rounded-md text-white/40 hover:text-white';
    desc.textContent = tempSyncMode === 'realtime' ? 'Syncs every hour or when billing occurs.' : 'Automated sync for previous reports in batches of 10.';
}
function saveSettings() {
    syncUrl = document.getElementById('sync-url-input').value;
    syncMode = tempSyncMode;
    save();
    closeSettings();
    showToast('Configuration Saved');
}

function deductInventoryOnBilling(billItems, billNo) {
  billItems.forEach(item => {
    const recipe = RECIPES[item.id];
    if (recipe && recipe.autoDeduct) {
      recipe.ingredients.forEach(ing => {
        if (inventory[ing.id]) {
          inventory[ing.id].currentStock -= (ing.qty * item.qty);
          
          inventoryLog.push({
            date: new Date().toLocaleDateString('en-IN'),
            time: new Date().toLocaleTimeString('en-IN'),
            type: 'USAGE',
            itemId: ing.id,
            quantity: -(ing.qty * item.qty),
            menuItem: item.id,
            billNo: billNo
          });
          
          checkStockAlerts(ing.id);
        }
      });
    }
  });
  saveInventory();
}

function checkStockAlerts(itemId) {
  const item = inventory[itemId];
  if (!item) return;

  if (item.currentStock <= 0) {
    showToast(`🔴 OUT OF STOCK: ${item.name}!`);
  } else if (item.currentStock <= item.minStock) {
    showToast(`⚠️ Low Stock: ${item.name} (${item.currentStock} ${item.unit} left)`);
  }
}

// --- MQTT ---
function setupMQTT() {
    const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
    client.on('connect', () => client.subscribe('maagayatri/restaurant/waiter_order'));
    client.on('message', (topic, message) => {
        if (topic === 'maagayatri/restaurant/waiter_order') {
            const data = JSON.parse(message.toString());
            new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(()=>{});
            waiterOrders.push({...data, id: Date.now()});
            renderWaiterOrders();
            showToast('New Waiter Order!');
        }
    });

    // --- SALES MQTT (HiveMQ) ---
    const salesClient = mqtt.connect('wss://broker.hivemq.com:8884/mqtt', {
        clientId: 'mgpos_main_publisher_' + Math.random().toString(16).substr(2, 8),
        clean: true 
    });
    
    salesClient.on('connect', () => {
        console.log('Connected to Sales HiveMQ Broker');
        salesClient.subscribe('mghr/sales/ack', { qos: 1 });
    });

    salesClient.on('message', (topic, message) => {
        if (topic === 'mghr/sales/ack') {
            try {
                const ack = JSON.parse(message.toString());
                console.log('Sale received by viewer:', ack.billNo);
            } catch(e){}
        }
    });

    window.salesMqttClient = salesClient;
}
function renderWaiterOrders() {
    const container = document.getElementById('waiter-orders');
    container.innerHTML = waiterOrders.map(wo => `
        <div class="bg-[#1C1C1C] border-2 border-[#D4A84B] rounded-xl shadow-2xl p-4 animate-in relative">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="text-[#D4A84B] font-bold text-xs uppercase tracking-widest">Waiter Order</h4>
                    <div class="text-lg font-bold">${TABLE_LABELS[wo.tableId]}</div>
                </div>
                <button onclick="discardWaiter(${wo.id})" class="text-white/40 hover:text-red-500"><i data-lucide="x" class="w-4 h-4"></i></button>
            </div>
            <div class="space-y-1 mb-4 text-sm">
                ${wo.items.map(it => `<div class="flex justify-between border-b border-white/5 pb-1"><span>${it.name}</span><span class="text-[#D4A84B]">×${it.qty}</span></div>`).join('')}
            </div>
            <button onclick="acceptWaiter(${wo.id})" class="w-full py-2 bg-green-600 rounded font-bold text-xs text-white">ACCEPT ORDER</button>
        </div>
    `).join('');
    updateIcons();
}
function discardWaiter(id) { waiterOrders = waiterOrders.filter(w => w.id !== id); renderWaiterOrders(); }
function acceptWaiter(id) {
    const wo = waiterOrders.find(w => w.id === id);
    wo.items.forEach(it => {
        const menuItem = FLAT_MENU.find(m => m.name === it.name);
        if(menuItem) addItem(wo.tableId, menuItem.id);
    });
    discardWaiter(id);
    showToast('Order Accepted');
}

// --- EXPORT ---
function exportLog() {
    if(!salesLog.length) return;
    const rows = [['Bill No', 'Table', 'Date', 'Total', 'Items']];
    salesLog.forEach(e => rows.push([e.billNo, e.label, e.date, e.total, e.items.join(' | ')]));
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'sales_log.csv'; a.click();
}

// --- RECIPE MANAGEMENT ---
let activeRecipeItemId = null;

function renderRecipeMenu() {
    const list = document.getElementById('admin-recipe-menu-list');
    if (!list) return;
    const searchEl = document.getElementById('recipe-search');
    const query = searchEl ? searchEl.value.toLowerCase().trim() : '';

    let html = '';
    MENU_CATEGORIES.forEach(cat => {
        const filteredItems = cat.items.filter(it => !query || it.name.toLowerCase().includes(query) || it.id.toLowerCase().includes(query));
        if (filteredItems.length > 0) {
            html += `<div class="font-bold text-[#D4A84B] mt-2 mb-1 px-2 border-b border-[#D4A84B]/20 pb-1">${cat.label}</div>`;
            filteredItems.forEach(it => {
                const hasRecipe = !!RECIPES[it.id];
                html += `
                    <div onclick="selectRecipeMenuItem('${it.id}', '${it.name.replace(/'/g, "\\'")}')" class="p-2 border rounded cursor-pointer flex justify-between items-center ${activeRecipeItemId === it.id ? 'bg-[#185e13] border-[#185e13] text-white' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'}">
                        <span>${it.name}</span>
                        ${hasRecipe ? '<span class="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded font-bold uppercase">Recipe</span>' : ''}
                    </div>
                `;
            });
        }
    });
    list.innerHTML = html;
}

function selectRecipeMenuItem(itemId, itemName) {
    activeRecipeItemId = itemId;
    document.getElementById('recipe-editor-placeholder').classList.add('hidden');
    document.getElementById('recipe-editor-content').classList.remove('hidden');
    document.getElementById('recipe-editor-content').classList.add('flex');
    
    document.getElementById('recipe-item-name').textContent = itemName;
    document.getElementById('recipe-item-id').textContent = itemId;

    const recipe = RECIPES[itemId] || { menuItemId: itemId, autoDeduct: false, ingredients: [] };
    document.getElementById('recipe-auto-deduct').checked = recipe.autoDeduct;
    
    renderRecipeIngredients(recipe.ingredients);
    renderRecipeMenu(); // to update selection highlight
}

function populateRecipeIngredientSelect() {
    const select = document.getElementById('recipe-add-ing-select');
    if (!select) return;
    let html = '<option value="">-- Select Inventory Item --</option>';
    
    // Group by category
    const categories = [...new Set(Object.values(inventory).map(i => i.category))];
    categories.forEach(cat => {
        html += `<optgroup label="${cat.toUpperCase()}">`;
        Object.values(inventory).filter(i => i.category === cat).forEach(it => {
            html += `<option value="${it.id}">${it.name} (${it.unit})</option>`;
        });
        html += `</optgroup>`;
    });
    select.innerHTML = html;
}

function renderRecipeIngredients(ingredients) {
    const list = document.getElementById('admin-recipe-ingredients');
    if (!ingredients || ingredients.length === 0) {
        list.innerHTML = '<div class="text-white/40 text-sm p-4 text-center border border-white/5 rounded">No ingredients added yet.</div>';
        return;
    }

    list.innerHTML = ingredients.map((ing, idx) => {
        const invItem = inventory[ing.id];
        const name = invItem ? invItem.name : 'Unknown Item';
        const unit = invItem ? invItem.unit : 'unit';
        
        return `
        <div class="grid grid-cols-[3fr_2fr_1fr] gap-4 items-center p-2 rounded border border-white/5 bg-white/5 text-sm">
            <div>
                <div class="font-bold">${name}</div>
                <div class="text-[10px] text-white/40">${ing.id}</div>
            </div>
            <div class="flex items-center gap-2">
                <input type="number" step="any" value="${ing.qty}" onchange="updateRecipeIngredient(${idx}, parseFloat(this.value))" class="w-16 bg-[#1C1C1C] border border-[#6b5656] rounded px-2 py-1 outline-none focus:border-[#D4A84B]">
                <span class="text-white/50 text-xs">${unit}</span>
            </div>
            <div class="flex justify-end">
                <button onclick="removeRecipeIngredient(${idx})" class="text-red-500 hover:text-red-700 bg-red-500/10 p-1.5 rounded flex items-center justify-center"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
        </div>
        `;
    }).join('');
    updateIcons();
}

function saveCurrentRecipe(ingredients, autoDeduct) {
    if (!activeRecipeItemId) return;
    RECIPES[activeRecipeItemId] = {
        menuItemId: activeRecipeItemId,
        autoDeduct: autoDeduct,
        ingredients: ingredients
    };
    localStorage.setItem('mgpos_recipes', JSON.stringify(RECIPES));
}

function toggleRecipeAutoDeduct() {
    if (!activeRecipeItemId) return;
    const recipe = RECIPES[activeRecipeItemId] || { menuItemId: activeRecipeItemId, ingredients: [] };
    const checked = document.getElementById('recipe-auto-deduct').checked;
    saveCurrentRecipe(recipe.ingredients, checked);
}

function addRecipeIngredient() {
    if (!activeRecipeItemId) return;
    const select = document.getElementById('recipe-add-ing-select');
    const ingId = select.value;
    if (!ingId) {
        showToast('Please select an inventory item first');
        return;
    }
    
    // Default quantity
    const defaultQty = 1;
    
    let recipe = RECIPES[activeRecipeItemId];
    if (!recipe) {
        recipe = { menuItemId: activeRecipeItemId, autoDeduct: document.getElementById('recipe-auto-deduct').checked, ingredients: [] };
    }
    
    // Check if exists
    if (recipe.ingredients.find(i => i.id === ingId)) {
        showToast('Item already exists in recipe');
        return;
    }
    
    const invItem = inventory[ingId];
    recipe.ingredients.push({ id: ingId, qty: defaultQty, unit: invItem.unit });
    
    saveCurrentRecipe(recipe.ingredients, recipe.autoDeduct);
    renderRecipeIngredients(recipe.ingredients);
    renderRecipeMenu(); // update badge
    
    // Reset select
    select.value = '';
}

function updateRecipeIngredient(idx, qty) {
    if (!activeRecipeItemId || isNaN(qty) || qty < 0) return;
    const recipe = RECIPES[activeRecipeItemId];
    if (recipe && recipe.ingredients[idx]) {
        recipe.ingredients[idx].qty = qty;
        saveCurrentRecipe(recipe.ingredients, recipe.autoDeduct);
    }
}

function removeRecipeIngredient(idx) {
    if (!activeRecipeItemId) return;
    const recipe = RECIPES[activeRecipeItemId];
    if (recipe && recipe.ingredients[idx]) {
        recipe.ingredients.splice(idx, 1);
        if (recipe.ingredients.length === 0 && !recipe.autoDeduct) {
             delete RECIPES[activeRecipeItemId];
             localStorage.setItem('mgpos_recipes', JSON.stringify(RECIPES));
        } else {
             saveCurrentRecipe(recipe.ingredients, recipe.autoDeduct);
        }
        renderRecipeIngredients(recipe ? recipe.ingredients : []);
        renderRecipeMenu(); // update badge
    }
}

document.addEventListener('keydown', (e) => {
    const printOverlay = document.getElementById('print-overlay');
    if (printOverlay && !printOverlay.classList.contains('hidden')) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const btn = printOverlay.querySelector('.bg-green-600');
            if (btn) btn.click();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closePrint();
        }
    }
});
