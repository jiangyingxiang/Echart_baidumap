var myChart = echarts.init(document.getElementById('main'));

var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028],
    '保山': [99.1779, 25.1204],
    '常州': [119.9818, 31.7713],
    '成都': [104.0679, 30.6799],
    '重庆': [106.530635, 29.544605999999998],
    '大理':[100.21920899999999, 25.693967],
    '大连': [121.593478, 38.94871],
    '东营': [118.61264299999999, 37.408666],
    '敦煌': [94.792135, 40.174113],
    '恩施': [109.51743300000001, 30.308978999999997],
    '广州': [113.30765, 23.120048999999998],
    '哈尔滨': [126.65771699999999, 45.773225],
    '海口': [110.330802, 20.022071],
    '杭州': [120.219375, 30.259244],
    '合肥': [117.282699, 31.866941999999998],
    '淮安': [119.313295, 33.528349],
    '加格达奇': [124.13285, 50.426229],
    '嘉峪关': [98.281635, 39.802397],
    '昆明': [102.714601, 25.049153],
    '兰州': [103.823305, 36.064226],
    '拉萨': [91.111891, 29.662557],
    '连云港': [119.173872, 34.601549],
      '丽江': [100.229628, 26.875351000000002],
      '临沂': [118.340768, 35.072409],
      '洛阳': [112.447525, 34.657368],
      '泸州': [105.44397, 28.89593],
      '吕梁': [111.143157, 37.527316],
      '芒市': [98.38210500000001, 24.376811],
      '南昌': [115.893528, 28.689578000000004],
      '南京': [118.778074, 32.057235],
       '宁波': [121.579006, 29.885259],
      '普洱': [100.980058, 22.788778],
      '青岛': [120.384428, 36.105215],
      '三亚': [109.52277099999999, 18.257776],
      '上海': [121.487899, 31.249162],
      '深圳': [114.025974, 22.546054],
      '太原': [112.55086399999999, 37.890277000000005],
      '腾冲': [98.499988, 25.279978],
      '铜仁': [109.168558, 27.674903000000004],
      '温州': [120.69063500000001, 28.002838],
      '武汉': [114.3162, 30.581084000000004],
      '无锡':[120.305456, 31.570037],
      '厦门': [118.10388600000002, 24.489231],
      '西安': [108.95106399999999, 34.347507],
      '香格里拉': [99.855076, 27.866681],
      '西宁': [101.767921, 36.640739],
      '西双版纳': [100.803038, 22.009432999999998],
      '烟台': [121.309555, 37.536561999999996],
      '银川': [106.206479, 38.502621000000005],
      '昭通': [103.725021, 27.340633],
      '北京': [116.395645, 39.929986],
      '成都': [104.067924, 30.679942999999998],
      '大同': [113.311035, 40.12684],
      '恩施': [109.51743300000001, 30.308978999999997],
      '福州': [119.330221, 26.047125],
      '广州': [113.30765, 23.120048999999998],
      '哈尔滨': [126.65771699999999, 45.773225],
      '海口': [110.330802, 20.022071],
      '杭州': [120.219375, 30.259244],
      '黄山': [118.34543700000002, 29.721890000000002],
      '揭阳': [116.379501, 23.547999],
      '昆明': [102.714601, 25.049153],
      '兰州': [103.823305, 36.064226],
      '兰州': [103.823305, 36.064226],
      '青岛': [120.384428, 36.105215],
      '三亚': [109.52277099999999, 18.257776],
      '上海': [121.487899, 31.249162],
      '太原': [112.55086399999999, 37.890277000000005],
      '温州': [120.69063500000001, 28.002838],
      '厦门': [118.10388600000002, 24.489231],
      '襄阳': [112.25009299999999, 32.229169],
      '烟台': [121.309555, 37.536561999999996],
      '义乌': [120.067296, 29.306444],
      '遵义': [106.93126000000001, 27.699961],
      '百色':[106.631821, 23.901512],
       '包头': [109.84623799999999, 40.647119],
       '北海': [109.122628, 21.472718],
       '长春': [125.31364199999999, 43.898338],
       '长沙': [112.979353, 28.213478000000002],
        '朝阳': [120.446573, 41.589103],
       '成都': [104.067924, 30.679942999999998],
       '赤峰': [118.930761, 42.297112],
       '重庆': [106.530635, 29.544605999999998],
       '大理': [100.21920899999999, 25.693967],
        '大连': [121.593478, 38.94871],
        '大庆': [125.02184, 46.596709000000004],
        '达州': [107.494973, 31.214199],
        '东营': [118.61264299999999, 37.408666],
        '鄂尔多斯': [109.993706, 39.81649],
        '恩施': [109.51743300000001, 30.308978999999997],
        '福州': [119.330221, 26.047125],
        '赣州': [114.93590900000001, 25.845295999999998],
        '广元': [105.81968700000002, 32.44104],
        '广州': [113.30765, 23.120048999999998],
        '桂林': [110.26092, 25.262901],
        '贵阳': [106.709177, 26.629907],
        '哈尔滨': [126.65771699999999, 45.773225],
        '海口': [110.330802, 20.022071],
        '海拉尔': [120.042882, 49.279245],
        '哈密': [93.52937299999999, 42.344467],
        '合肥': [117.282699, 31.866941999999998],
        '黑河': [127.50083000000001, 50.250690000000006],
        '衡阳': [112.58381899999999, 26.898164],
        '淮安': [119.313295, 33.528349],
      '黄山': [118.34543700000002, 29.721890000000002],
        '黄山': [118.34543700000002, 29.721890000000002],
        '呼和浩特': [111.660351, 40.828319],
        '揭阳': [116.379501, 23.547999],
        '济南': [117.02496699999999, 36.682784999999996],
        '克拉玛依': [84.92699, 45.203919],
        '昆明': [102.714601, 25.049153],
        '兰州': [103.823305, 36.064226],
        '兰州': [103.823305, 36.064226],
        '丽江': [100.229628, 26.875351000000002],

        '临沂': [118.340768, 35.072409],
        '黎平': [109.07458999999999, 26.157514000000003],

        '洛阳': [112.447525, 34.657368],
        '牡丹江': [129.608035, 44.588521],
        '南昌': [115.893528, 28.689578000000004],
        '南充': [106.105554, 30.800965],
        '南京': [118.778074, 32.057235],
        '南宁': [108.297234, 22.806493],

        '齐齐哈尔': [123.98728899999999, 47.3477],
        '三亚': [109.52277099999999, 18.257776],
        '深圳': [114.025974, 22.546054],
        '深圳': [114.025974, 22.546054],
        '太原': [112.55086399999999, 37.890277000000005],
        '唐山': [118.183451, 39.650531],
        '天津': [117.21081299999999, 39.14393],
        '通化': [125.94265, 41.736397],
        '铜仁': [109.168558, 27.674903000000004],
        '威海': [122.093958, 37.528787],
        '温州': [120.69063500000001, 28.002838],
        '乌兰浩特': [122.081534, 46.116944000000004],
        '乌鲁木齐': [87.564988, 43.840379999999996],
        '厦门': [118.10388600000002, 24.489231],
        '厦门': [118.10388600000002, 24.489231],
        '西安': [108.95106399999999, 34.347507],
        '西宁': [101.767921, 36.640739],
        '延安': [109.50051, 36.603320000000004],
        '盐城': [120.148872, 33.379862],
        '延吉': [129.471302, 43.059667],
        '烟台': [121.309555, 37.536561999999996],
        '宜宾': [104.63301899999999, 28.769675],
        '宜昌': [111.31098100000001, 30.732758],
        '伊春': [128.90058, 47.741959],
        '银川': [106.206479, 38.502621000000005],
        '榆林': [109.745926, 38.279439],
        '张家界': [110.48161999999999, 29.124889000000003],
        '张家口': [114.893782, 40.811188],
        '湛江': [110.365067, 21.257463],

        '郑州': [113.649644, 34.756609999999995],
        '舟山': [122.169872, 30.036009999999997],

      '成都': [104.067924, 30.679942999999998],
      '大理': [100.21920899999999, 25.693967],
      '福州': [119.330221, 26.047125],
      '井冈山': [114.12543899999999, 26.63315],
      '昆明': [102.714601, 25.049153],
      '兰州': [103.823305, 36.064226],
      '丽江': [100.229628, 26.875351000000002],
      '芒市': [98.38210500000001, 24.376811],
      '南昌':[115.893528, 28.689578000000004],
      '南京': [118.778074, 32.057235],
      '宁波': [121.579006, 29.885259],
      '青岛': [120.384428, 36.105215],
      '太原': [112.55086399999999, 37.890277000000005],
      '天津': [117.21081299999999, 39.14393],
      '无锡': [120.305456, 31.570037],
      '西安': [108.95106399999999, 34.347507],
      '烟台': [121.309555, 37.536561999999996],
      '永州': [111.614648, 26.435971999999996],
      '榆林': [109.745926, 38.279439]

};

var BJData = [[{'departure_city': '北京'}, {'landing_city': '保山', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '保山', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '保山', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '常州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '成都', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '重庆', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '大理', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '大理', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '大连', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '东营', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '东营', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '敦煌', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '恩施', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '广州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '广州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '广州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '广州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '哈尔滨', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '哈尔滨', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '哈尔滨', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '哈尔滨', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '海口', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '杭州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '杭州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '杭州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '杭州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '杭州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '杭州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '合肥', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '合肥', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '淮安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '加格达奇', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '嘉峪关', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昆明', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '兰州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '兰州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '兰州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '兰州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '兰州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '拉萨', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '拉萨', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '连云港', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '丽江', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '丽江', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '临沂', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '洛阳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '洛阳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '洛阳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '洛阳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '泸州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '泸州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '吕梁', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '吕梁', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '芒市', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南昌', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南昌', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南昌', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南昌', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南昌', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '南京', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '宁波', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '宁波', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '宁波', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '宁波', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '普洱', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '青岛', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '青岛', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '青岛', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '青岛', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '三亚', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '三亚', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '上海', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '深圳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '深圳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '太原', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '太原', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '太原', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '太原', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '太原', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '腾冲', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '铜仁', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '铜仁', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '温州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '温州', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '武汉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '无锡', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '无锡', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '无锡', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '厦门', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西安', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '香格里拉', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西宁', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '西双版纳', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '烟台', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '烟台', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '烟台', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '烟台', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '银川', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '银川', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '银川', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '银川', 'value': 20}], [{'departure_city': '北京'}, {'landing_city': '昭通', 'value': 20}]];

var SHData = [[{'departure_city': '上海'}, {'landing_city': '百色', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '包头', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北海', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '北京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '长春', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '长春', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '长沙', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '长沙', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '长沙', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '长沙', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '朝阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '成都', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '赤峰', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '重庆', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '重庆', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '重庆', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '重庆', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大理', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大连', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '大庆', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '达州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '东营', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '鄂尔多斯', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '恩施', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '福州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '福州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '福州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '福州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '赣州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '赣州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广元', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '广州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '桂林', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '桂林', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '贵阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '贵阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '哈尔滨', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '哈尔滨', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '哈尔滨', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '哈尔滨', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '哈尔滨', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '海口', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '海口', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '海口', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '海拉尔', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '哈密', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '合肥', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '黑河', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '衡阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '淮安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '黄山', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '黄山', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '呼和浩特', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '呼和浩特', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '揭阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '揭阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '揭阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '揭阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '济南', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '济南', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '克拉玛依', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '昆明', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '昆明', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '昆明', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '昆明', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '昆明', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '昆明', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '兰州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '兰州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '兰州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '丽江', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '丽江', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '临沂', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '黎平', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '黎平', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '洛阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '牡丹江', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '牡丹江', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南昌', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南充', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南京', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南宁', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南宁', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南宁', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '南宁', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '宁波', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '青岛', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '齐齐哈尔', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '齐齐哈尔', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '三亚', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '三亚', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '沈阳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '深圳', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '太原', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '太原', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '太原', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '太原', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '太原', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '太原', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '唐山', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '天津', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '天津', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '天津', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '天津', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '天津', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '天津', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '通化', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '铜仁', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '威海', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '威海', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '温州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '温州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '武汉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '乌兰浩特', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '乌鲁木齐', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '乌鲁木齐', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '厦门', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '厦门', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '厦门', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '厦门', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '厦门', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '厦门', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '西宁', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '延安', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '盐城', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '盐城', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '延吉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '延吉', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '烟台', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '烟台', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '烟台', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '烟台', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '烟台', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '烟台', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '宜宾', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '宜昌', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '伊春', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '银川', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '银川', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '榆林', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '张家界', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '张家口', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '湛江', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '郑州', 'value': 60}], [{'departure_city': '上海'}, {'landing_city': '舟山', 'value': 60}]];

var GZData = [[{'departure_city': '深圳'}, {'landing_city': '北京', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '成都', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '成都', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '大理', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '福州', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '井冈山', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '昆明', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '昆明', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '昆明', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '昆明', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '昆明', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '兰州', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '丽江', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '芒市', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '南昌', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '南京', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '宁波', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '青岛', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '上海', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '太原', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '天津', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '天津', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '无锡', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '无锡', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '无锡', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '无锡', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '无锡', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '西安', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '西安', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '西安', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '西安', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '烟台', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '永州', 'value': 50}], [{'departure_city': '深圳'}, {'landing_city': '榆林', 'value': 50}]];
var WHData = [[{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '北京', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '成都', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '成都', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '成都', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '成都', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '成都', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '大同', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '恩施', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '恩施', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '福州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '广州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '广州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '广州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '哈尔滨', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '海口', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '杭州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '黄山', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '揭阳', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '昆明', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '昆明', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '昆明', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '昆明', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '兰州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '兰州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '青岛', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '三亚', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '上海', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '太原', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '太原', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '太原', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '温州', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '厦门', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '襄阳', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '襄阳', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '烟台', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '义乌', 'value': 40}], [{'departure_city': '武汉'}, {'landing_city': '遵义', 'value': 40}]];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].departure_city];
        var toCoord = geoCoordMap[dataItem[1].landing_city];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].departure_city,
                toName: dataItem[1].landing_city,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['北京', BJData], ['上海', SHData], ['深圳', GZData],['武汉', WHData]].forEach(function (item, i) {
    series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top10',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].landing_city,
                    value: geoCoordMap[dataItem[1].landing_city].concat([dataItem[1].value])
                };
            })
        });
});

option = {
    backgroundColor: '#404a59',
    title : {
        text: '东方航空飞机迁徙图',
        subtext: '数据来自网络',
        left: 'center',
        textStyle : {
            color: '#9433ff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '深圳 Top10','武汉 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    dataRange: {
        min: 0,
        max: 100,
        x: 'right',
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    bmap: {
        center: [115.97, 29.71],
        zoom: 5,
        roam: true
    },

    // geo: {
    //     map: 'world',
    //     center: [115.97, 29.71],
    //     zoom: 5,
    //     label: {
    //         emphasis: {
    //             show: false
    //         }
    //     },
    //     roam: true,
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#323c48',
    //             borderColor: '#404a59'
    //         },
    //         emphasis: {
    //             areaColor: '#2a333d'
    //         }
    //     }
    // },
    series: series
};





myChart.setOption(option);