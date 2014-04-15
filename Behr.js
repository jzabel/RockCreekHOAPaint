(function($b$$) {
  function $d$$($g$$, $h$$) {
    if(!(1 < $g$$.originalEvent.touches.length)) {
      $g$$.preventDefault();
      var $i$$ = $g$$.originalEvent.changedTouches[0], $f$$ = document.createEvent("MouseEvents");
      $f$$.initMouseEvent($h$$, !0, !0, window, 1, $i$$.screenX, $i$$.screenY, $i$$.clientX, $i$$.clientY, !1, !1, !1, !1, 0, null);
      $g$$.target.dispatchEvent($f$$)
    }
  }
  $b$$.support.touch = "ontouchend" in document;
  if($b$$.support.touch) {
    var $c$$ = $b$$.ui.mouse.prototype, $e$$ = $c$$._mouseInit, $a$$;
    $c$$._touchStart = function $$c$$$_touchStart$($g$$) {
      !$a$$ && this._mouseCapture($g$$.originalEvent.changedTouches[0]) && ($a$$ = !0, this._touchMoved = !1, $d$$($g$$, "mouseover"), $d$$($g$$, "mousemove"), $d$$($g$$, "mousedown"))
    };
    $c$$._touchMove = function $$c$$$_touchMove$($f$$) {
      $a$$ && (this._touchMoved = !0, $d$$($f$$, "mousemove"))
    };
    $c$$._touchEnd = function $$c$$$_touchEnd$($f$$) {
      $a$$ && ($d$$($f$$, "mouseup"), $d$$($f$$, "mouseout"), this._touchMoved || $d$$($f$$, "click"), $a$$ = !1)
    };
    $c$$._mouseInit = function $$c$$$_mouseInit$() {
      this.element.bind("touchstart", $b$$.proxy(this, "_touchStart")).bind("touchmove", $b$$.proxy(this, "_touchMove")).bind("touchend", $b$$.proxy(this, "_touchEnd"));
      $e$$.call(this)
    }
  }
})(jQuery);
var colorLookup = [], nullColor;
$(document).ready(function() {
  loadColorData();
  nullColor = colorLookup["750C-3"]
});
function ColorDef() {
}
ColorDef.load = function $ColorDef$load$($fields$$, $data$$) {
  for(var $cd$$ = new ColorDef, $c$$ = 0;$c$$ < $fields$$.length;$c$$++) {
    var $field$$ = $fields$$[$c$$], $d$$ = $data$$[$c$$];
    "true" === $d$$ ? $d$$ = !0 : "false" === $d$$ && ($d$$ = !1);
    $cd$$[$field$$] = $d$$
  }
  return $cd$$
};
function loadColorData() {
  for(var $cols$$ = colorData.splice(0, 1), $i$$ = 0;$i$$ < colorData.length;$i$$++) {
    var $def$$ = ColorDef.load($cols$$[0], colorData[$i$$]);
    colorLookup[$def$$.id] = $def$$
  }
}
function Illuminants() {
}
Illuminants.A = [109.85, 100, 35.585];
Illuminants.B = [99.072, 100, 85.223];
Illuminants.C = [98.074, 100, 118.232];
Illuminants.D50 = [96.422, 100, 82.521];
Illuminants.D55 = [95.682, 100, 92.149];
Illuminants.D65 = [95.047, 100, 108.883];
Illuminants.D75 = [94.972, 100, 122.638];
Illuminants.E = [100, 100, 100];
Illuminants.F2 = [99.186, 100, 67.393];
Illuminants.F7 = [95.041, 100, 108.747];
Illuminants.F11 = [100.962, 100, 64.35];
Illuminants.None = [100, 100, 100];
function ColorMatrixes() {
}
ColorMatrixes.Adobe_RGB_D65 = [[0.5767309, 0.185554, 0.1881852], [0.2973769, 0.6273491, 0.0752741], [0.0270343, 0.0706872, 0.9911085]];
ColorMatrixes.iAdobe_RGB_D65 = [[2.041369, -0.5649464, -0.3446944], [-0.969266, 1.8760108, 0.041556], [0.0134474, -0.1183897, 1.0154096]];
ColorMatrixes.AppleRGB_D65 = [[0.4497288, 0.3162486, 0.1844926], [0.2446525, 0.6720283, 0.0833192], [0.0251848, 0.1411824, 0.9224628]];
ColorMatrixes.iAppleRGB_D65 = [[2.9515373, -1.2894116, -0.4738445], [-1.0851093, 1.9908566, 0.0372026], [0.0854934, -0.2694964, 1.0912975]];
ColorMatrixes.Best_RGB_D50 = [[0.6326696, 0.2045558, 0.1269946], [0.2284569, 0.7373523, 0.0341908], [0, 0.0095142, 0.8156958]];
ColorMatrixes.iBest_RGB_D50 = [[1.7552599, -0.4836786, -0.253], [-0.5441336, 1.5068789, 0.0215528], [0.0063467, -0.0175761, 1.2256959]];
ColorMatrixes.Beta_RGB_D50 = [[0.6712537, 0.1745834, 0.1183829], [0.3032726, 0.6637861, 0.0329413], [0, 0.040701, 0.784509]];
ColorMatrixes.iBeta_RGB_D50 = [[1.683227, -0.4282363, -0.2360185], [-0.7710229, 1.7065571, 0.04469], [0.0400013, -0.0885376, 1.272364]];
ColorMatrixes.Bruce_RGB_D65 = [[0.4674162, 0.2944512, 0.1886026], [0.2410115, 0.6835475, 0.075441], [0.0219101, 0.0736128, 0.9933071]];
ColorMatrixes.iBruce_RGB_D65 = [[2.7454669, -1.1358136, -0.4350269], [-0.969266, 1.8760108, 0.041556], [0.0112723, -0.1139754, 1.0132541]];
ColorMatrixes.CIE_RGB_E = [[0.488718, 0.3106803, 0.2006017], [0.1762044, 0.8129847, 0.0108109], [0, 0.0102048, 0.9897952]];
ColorMatrixes.iCIE_RGB_E = [[2.3706743, -0.9000405, -0.4706338], [-0.513885, 1.4253036, 0.0885814], [0.0052982, -0.0146949, 1.0093968]];
ColorMatrixes.ColorMatch_RGB_D50 = [[0.5093439, 0.3209071, 0.1339691], [0.274884, 0.6581315, 0.0669845], [0.0242545, 0.1087821, 0.6921735]];
ColorMatrixes.iColorMatch_RGB_D50 = [[2.6422874, -1.223427, -0.3930143], [-1.1119763, 2.0590183, 0.0159614], [0.0821699, -0.2807254, 1.4559877]];
ColorMatrixes.Don_RGB_4_D50 = [[0.6457711, 0.1933511, 0.1250978], [0.2783496, 0.6879702, 0.0336802], [0.0037113, 0.0179861, 0.8035125]];
ColorMatrixes.iDon_RGB_4_D50 = [[1.7603902, -0.4881198, -0.2536126], [-0.7126288, 1.6527432, 0.0416715], [0.0078207, -0.0347411, 1.2447743]];
ColorMatrixes.ECI_RGB_D50 = [[0.6502043, 0.1780774, 0.1359384], [0.3202499, 0.6020711, 0.0776791], [-0, 0.067839, 0.757371]];
ColorMatrixes.iECI_RGB_D50 = [[1.7827618, -0.4969847, -0.2690101], [-0.9593623, 1.9477962, -0.0275807], [0.0859317, -0.1744674, 1.3228273]];
ColorMatrixes.Ekta_Space_PS5_D50 = [[0.5938914, 0.2729801, 0.0973485], [0.2606286, 0.7349465, 0.0044249], [0, 0.0419969, 0.7832131]];
ColorMatrixes.iEkta_Space_PS5_D50 = [[2.0043819, -0.7304844, -0.2450052], [-0.7110285, 1.6202126, 0.0792227], [0.0381263, -0.086878, 1.2725438]];
ColorMatrixes.NTSC_RGB_C = [[0.6068909, 0.1735011, 0.200348], [0.2989164, 0.586599, 0.1144845], [-0, 0.0660957, 1.1162243]];
ColorMatrixes.iNTSC_RGB_C = [[1.9099961, -0.5324542, -0.2882091], [-0.9846663, 1.999171, -0.0283082], [0.0583056, -0.1183781, 0.8975535]];
ColorMatrixes.PAL_SECAM_RGB_D65 = [[0.430619, 0.3415419, 0.1783091], [0.2220379, 0.7066384, 0.0713236], [0.0201853, 0.1295504, 0.9390944]];
ColorMatrixes.iPAL_SECAM_RGB_D65 = [[3.0628971, -1.3931791, -0.4757517], [-0.969266, 1.8760108, 0.041556], [0.0678775, -0.2288548, 1.069349]];
ColorMatrixes.ProPhoto_RGB_D50 = [[0.7976749, 0.1351917, 0.0313534], [0.2880402, 0.7118741, 8.57E-5], [0, 0, 0.82521]];
ColorMatrixes.iProPhoto_RGB_D50 = [[1.3459433, -0.2556075, -0.0511118], [-0.5445989, 1.5081673, 0.0205351], [0, 0, 1.2118128]];
ColorMatrixes.SMPTE_C_RGB_D65 = [[0.3935891, 0.3652497, 0.1916313], [0.2124132, 0.7010437, 0.0865432], [0.0187423, 0.1119313, 0.9581563]];
ColorMatrixes.iSMPTE_C_RGB_D65 = [[3.505396, -1.7394894, -0.543964], [-1.0690722, 1.9778245, 0.0351722], [0.05632, -0.1970226, 1.0502026]];
ColorMatrixes.sRGB_D65 = [[0.4124564, 0.3575761, 0.1804375], [0.2126729, 0.7151522, 0.072175], [0.0193339, 0.119192, 0.9503041]];
ColorMatrixes.isRGB_D65 = [[3.2404542, -1.5371385, -0.4985314], [-0.969266, 1.8760108, 0.041556], [0.0556434, -0.2040259, 1.0572252]];
ColorMatrixes.Wide_Gamut_RGB_D50 = [[0.7161046, 0.1009296, 0.1471858], [0.2581874, 0.7249378, 0.0168748], [0, 0.0517813, 0.7734287]];
ColorMatrixes.iWide_Gamut_RGB_D50 = [[1.4628067, -0.1840623, -0.2743606], [-0.5217933, 1.4472381, 0.0677227], [0.0349342, -0.096893, 1.2884099]];
function ColorUtilities() {
}
ColorUtilities.D50 = [96.4212, 100, 82.5188];
ColorUtilities.D55 = [95.6797, 100, 92.1481];
ColorUtilities.D65 = [95.0429, 100, 108.89];
ColorUtilities.D75 = [94.9722, 100, 122.6394];
ColorUtilities.E = [100, 100, 100];
ColorUtilities.whitePoint = Illuminants.D65;
ColorUtilities.chromaD50 = [0.3457, 0.3585, 100];
ColorUtilities.chromaD55 = [0.3324, 0.3474, 100];
ColorUtilities.chromaD65 = [0.3127, 0.3291, 100];
ColorUtilities.chromaD75 = [0.299, 0.3149, 100];
ColorUtilities.chromaWhitePoint = ColorUtilities.chromaD65;
ColorUtilities.Mi = ColorMatrixes.isRGB_D65;
ColorUtilities.M = ColorMatrixes.sRGB_D65;
ColorUtilities.DELTA_SIMILAR = 15;
ColorUtilities.createCanvas = function $ColorUtilities$createCanvas$($image$$) {
  if(!$image$$) {
    return null
  }
  var $canvas$$ = document.createElement("canvas");
  $canvas$$.width = $image$$.width;
  $canvas$$.height = $image$$.height;
  $canvas$$.getContext("2d").drawImage($image$$, 0, 0);
  return $canvas$$
};
ColorUtilities.convertRGBToXYZ = function $ColorUtilities$convertRGBToXYZ$($R_r$$, $G_g$$, $B_b$$) {
  var $result$$ = [];
  $R_r$$ /= 255;
  $G_g$$ /= 255;
  $B_b$$ /= 255;
  $R_r$$ = 0.04045 >= $R_r$$ ? $R_r$$ / 12.92 : Math.pow(($R_r$$ + 0.055) / 1.055, 2.4);
  $G_g$$ = 0.04045 >= $G_g$$ ? $G_g$$ / 12.92 : Math.pow(($G_g$$ + 0.055) / 1.055, 2.4);
  $B_b$$ = 0.04045 >= $B_b$$ ? $B_b$$ / 12.92 : Math.pow(($B_b$$ + 0.055) / 1.055, 2.4);
  $R_r$$ *= 100;
  $G_g$$ *= 100;
  $B_b$$ *= 100;
  $result$$[0] = $R_r$$ * ColorUtilities.M[0][0] + $G_g$$ * ColorUtilities.M[0][1] + $B_b$$ * ColorUtilities.M[0][2];
  $result$$[1] = $R_r$$ * ColorUtilities.M[1][0] + $G_g$$ * ColorUtilities.M[1][1] + $B_b$$ * ColorUtilities.M[1][2];
  $result$$[2] = $R_r$$ * ColorUtilities.M[2][0] + $G_g$$ * ColorUtilities.M[2][1] + $B_b$$ * ColorUtilities.M[2][2];
  return $result$$
};
ColorUtilities.convertXYZToLAB = function $ColorUtilities$convertXYZToLAB$($X_x$$, $Y_y$$, $Z_z$$) {
  $X_x$$ /= ColorUtilities.whitePoint[0];
  $Y_y$$ /= ColorUtilities.whitePoint[1];
  $Z_z$$ /= ColorUtilities.whitePoint[2];
  $X_x$$ = 0.008856 < $X_x$$ ? Math.pow($X_x$$, 1 / 3) : 7.787 * $X_x$$ + 16 / 116;
  $Y_y$$ = 0.008856 < $Y_y$$ ? Math.pow($Y_y$$, 1 / 3) : 7.787 * $Y_y$$ + 16 / 116;
  $Z_z$$ = 0.008856 < $Z_z$$ ? Math.pow($Z_z$$, 1 / 3) : 7.787 * $Z_z$$ + 16 / 116;
  var $result$$ = [];
  $result$$[0] = 116 * $Y_y$$ - 16;
  $result$$[1] = 500 * ($X_x$$ - $Y_y$$);
  $result$$[2] = 200 * ($Y_y$$ - $Z_z$$);
  return $result$$
};
ColorUtilities.colorCompareDE1994 = function $ColorUtilities$colorCompareDE1994$($dl_l1$$, $a1_da$$, $b1_db$$, $l2$$, $a2$$, $b2$$) {
  var $c1_third$$ = Math.sqrt($a1_da$$ * $a1_da$$ + $b1_db$$ * $b1_db$$), $c2_dc_second$$ = Math.sqrt($a2$$ * $a2$$ + $b2$$ * $b2$$), $c2_dc_second$$ = $c1_third$$ - $c2_dc_second$$;
  $dl_l1$$ -= $l2$$;
  $a1_da$$ -= $a2$$;
  $b1_db$$ -= $b2$$;
  $b1_db$$ = Math.sqrt($a1_da$$ * $a1_da$$ + $b1_db$$ * $b1_db$$ - $c2_dc_second$$ * $c2_dc_second$$);
  $c2_dc_second$$ /= 1 + 0.045 * $c1_third$$;
  $c1_third$$ = $b1_db$$ / (1 + 0.015 * $c1_third$$);
  return Math.sqrt($dl_l1$$ * $dl_l1$$ + $c2_dc_second$$ * $c2_dc_second$$ + $c1_third$$ * $c1_third$$)
};
ColorUtilities.areColorsSimilar = function $ColorUtilities$areColorsSimilar$($b1$$1_c1$$, $b2$$1_c2$$, $b3_c3$$) {
  var $l1$$ = $b1$$1_c1$$.luminosity, $a1$$ = $b1$$1_c1$$.a;
  $b1$$1_c1$$ = $b1$$1_c1$$.b;
  var $l2$$ = $b2$$1_c2$$.luminosity, $a2$$ = $b2$$1_c2$$.a;
  $b2$$1_c2$$ = $b2$$1_c2$$.b;
  var $l3$$ = $b3_c3$$.luminosity, $a3$$ = $b3_c3$$.a;
  $b3_c3$$ = $b3_c3$$.b;
  return ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$1_c1$$, $l2$$, $a2$$, $b2$$1_c2$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$1_c1$$, $l3$$, $a3$$, $b3_c3$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l3$$, $a3$$, $b3_c3$$, $l2$$, $a2$$, $b2$$1_c2$$) < ColorUtilities.DELTA_SIMILAR ? !0 : !1
};
ColorUtilities.combineColors = function $ColorUtilities$combineColors$($b1$$2_c1$$, $b2$$2_c2$$, $b3$$1_c3$$) {
  var $l1$$ = $b1$$2_c1$$.luminosity, $a1$$ = $b1$$2_c1$$.a;
  $b1$$2_c1$$ = $b1$$2_c1$$.b;
  var $l2$$ = $b2$$2_c2$$.luminosity, $a2$$ = $b2$$2_c2$$.a;
  $b2$$2_c2$$ = $b2$$2_c2$$.b;
  var $l3$$ = $b3$$1_c3$$.luminosity, $a3$$ = $b3$$1_c3$$.a;
  $b3$$1_c3$$ = $b3$$1_c3$$.b;
  return ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$2_c1$$, $l2$$, $a2$$, $b2$$2_c2$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l1$$, $a1$$, $b1$$2_c1$$, $l3$$, $a3$$, $b3$$1_c3$$) < ColorUtilities.DELTA_SIMILAR && ColorUtilities.colorCompareDE1994($l3$$, $a3$$, $b3$$1_c3$$, $l2$$, $a2$$, $b2$$2_c2$$) < ColorUtilities.DELTA_SIMILAR ? !0 : !1
};
ColorUtilities.findClosestBehrColor = function $ColorUtilities$findClosestBehrColor$($l$$, $a$$, $b$$) {
  var $lowestDif$$ = 1E4, $finalColor$$ = null, $compared$$ = 0, $c$$;
  for($c$$ in colorLookup) {
    if(colorLookup[$c$$].israck == rack) {
      var $color$$ = colorLookup[$c$$];
      $compared$$++;
      var $dif$$ = ColorUtilities.colorCompareDE1994($color$$.luminosity, $color$$.a, $color$$.b, $l$$, $a$$, $b$$);
      $dif$$ < $lowestDif$$ && ($finalColor$$ = $color$$, $lowestDif$$ = $dif$$)
    }
  }
  return $finalColor$$
};
ColorUtilities.toLCH = function $ColorUtilities$toLCH$($l$$, $a$$2_c$$, $b$$) {
  var $LCH$$ = [], $h$$ = Math.atan2($b$$, $a$$2_c$$), $h$$ = 0 < $h$$ ? 180 * ($h$$ / Math.PI) : 360 - 180 * (Math.abs($h$$) / Math.PI);
  $a$$2_c$$ = Math.sqrt(($a$$2_c$$ ^ 2) + ($b$$ ^ 2));
  $LCH$$.l = $l$$;
  $LCH$$.c = $a$$2_c$$;
  $LCH$$.h = $h$$;
  return $LCH$$
};
ColorUtilities.toLAB = function $ColorUtilities$toLAB$($l$$, $b$$4_c$$, $h$$) {
  var $LAB$$ = [], $a$$ = Math.cos($h$$ / (180 * Math.PI)) * $b$$4_c$$;
  $b$$4_c$$ *= Math.sin($h$$ / (180 * Math.PI));
  $LAB$$.l = $l$$;
  $LAB$$.a = $a$$;
  $LAB$$.b = $b$$4_c$$;
  return $LAB$$
};
ColorUtilities.extractRed = function $ColorUtilities$extractRed$($c$$) {
  return $c$$ >> 16 & 255
};
ColorUtilities.extractGreen = function $ColorUtilities$extractGreen$($c$$) {
  return $c$$ >> 8 & 255
};
ColorUtilities.extractBlue = function $ColorUtilities$extractBlue$($c$$) {
  return $c$$ & 255
};
ColorUtilities.convertRGBToLAB = function $ColorUtilities$convertRGBToLAB$($r$$, $g$$, $b$$) {
  $r$$ = ColorUtilities.convertRGBToXYZ($r$$, $g$$, $b$$);
  return ColorUtilities.convertXYZToLAB($r$$[0], $r$$[1], $r$$[2])
};
ColorUtilities.convertIntToLAB = function $ColorUtilities$convertIntToLAB$($b$$6_color$$) {
  var $r$$2_xyz$$ = ColorUtilities.extractRed($b$$6_color$$), $g$$ = ColorUtilities.extractGreen($b$$6_color$$);
  $b$$6_color$$ = ColorUtilities.extractBlue($b$$6_color$$);
  $r$$2_xyz$$ = ColorUtilities.convertRGBToXYZ($r$$2_xyz$$, $g$$, $b$$6_color$$);
  return ColorUtilities.convertXYZToLAB($r$$2_xyz$$[0], $r$$2_xyz$$[1], $r$$2_xyz$$[2])
};
ColorUtilities.convertLABToXYZ = function $ColorUtilities$convertLABToXYZ$($L_y$$, $a$$4_x$$, $b$$7_z$$) {
  var $result$$ = [];
  $L_y$$ = ($L_y$$ + 16) / 116;
  var $y3$$ = Math.pow($L_y$$, 3);
  $a$$4_x$$ = $a$$4_x$$ / 500 + $L_y$$;
  var $x3$$ = Math.pow($a$$4_x$$, 3);
  $b$$7_z$$ = $L_y$$ - $b$$7_z$$ / 200;
  var $z3$$ = Math.pow($b$$7_z$$, 3);
  $result$$[0] = (0.008856 < $x3$$ ? $x3$$ : ($a$$4_x$$ - 16 / 116) / 7.787) * ColorUtilities.whitePoint[0];
  $result$$[1] = (0.008856 < $y3$$ ? $y3$$ : ($L_y$$ - 16 / 116) / 7.787) * ColorUtilities.whitePoint[1];
  $result$$[2] = (0.008856 < $z3$$ ? $z3$$ : ($b$$7_z$$ - 16 / 116) / 7.787) * ColorUtilities.whitePoint[2];
  return $result$$
};
ColorUtilities.convertXYZToRGB = function $ColorUtilities$convertXYZToRGB$($X$$1_b$$8_x$$, $Y$$1_y$$, $Z$$1_r$$) {
  var $result$$ = [];
  $X$$1_b$$8_x$$ /= 100;
  $Y$$1_y$$ /= 100;
  var $z$$ = $Z$$1_r$$ / 100;
  $Z$$1_r$$ = $X$$1_b$$8_x$$ * ColorUtilities.Mi[0][0] + $Y$$1_y$$ * ColorUtilities.Mi[0][1] + $z$$ * ColorUtilities.Mi[0][2];
  var $g$$ = $X$$1_b$$8_x$$ * ColorUtilities.Mi[1][0] + $Y$$1_y$$ * ColorUtilities.Mi[1][1] + $z$$ * ColorUtilities.Mi[1][2];
  $X$$1_b$$8_x$$ = $X$$1_b$$8_x$$ * ColorUtilities.Mi[2][0] + $Y$$1_y$$ * ColorUtilities.Mi[2][1] + $z$$ * ColorUtilities.Mi[2][2];
  $Z$$1_r$$ = 0.0031308 < $Z$$1_r$$ ? 1.055 * Math.pow($Z$$1_r$$, 1 / 2.4) - 0.055 : 12.92 * $Z$$1_r$$;
  $g$$ = 0.0031308 < $g$$ ? 1.055 * Math.pow($g$$, 1 / 2.4) - 0.055 : 12.92 * $g$$;
  $X$$1_b$$8_x$$ = 0.0031308 < $X$$1_b$$8_x$$ ? 1.055 * Math.pow($X$$1_b$$8_x$$, 1 / 2.4) - 0.055 : 12.92 * $X$$1_b$$8_x$$;
  $result$$[0] = Math.floor(255 * (0 > $Z$$1_r$$ ? 0 : 1 < $Z$$1_r$$ ? 1 : $Z$$1_r$$));
  $result$$[1] = Math.floor(255 * (0 > $g$$ ? 0 : 1 < $g$$ ? 1 : $g$$));
  $result$$[2] = Math.floor(255 * (0 > $X$$1_b$$8_x$$ ? 0 : 1 < $X$$1_b$$8_x$$ ? 1 : $X$$1_b$$8_x$$));
  return $result$$
};
ColorUtilities.combineRGB = function $ColorUtilities$combineRGB$($r$$, $g$$, $b$$) {
  return $r$$ << 16 | $g$$ << 8 | $b$$
};
ColorUtilities.convertLABToRGB = function $ColorUtilities$convertLABToRGB$($l$$3_xyz$$, $a$$, $b$$) {
  $l$$3_xyz$$ = ColorUtilities.convertLABToXYZ($l$$3_xyz$$, $a$$, $b$$);
  return ColorUtilities.convertXYZToRGB($l$$3_xyz$$[0], $l$$3_xyz$$[1], $l$$3_xyz$$[2])
};
ColorUtilities.getRandomColor = function $ColorUtilities$getRandomColor$() {
  var $c$$ = ColorUtilities;
  if(void 0 == $c$$.colorLookupIndex) {
    $c$$.colorLookupIndex = [];
    var $index$$44_r$$ = 0, $i$$;
    for($i$$ in colorLookup) {
      $c$$.colorLookupIndex[$index$$44_r$$++] = $i$$
    }
  }
  $index$$44_r$$ = Math.floor(Math.random() * $c$$.colorLookupIndex.length);
  return colorLookup[$c$$.colorLookupIndex[$index$$44_r$$]]
};
ColorUtilities._getRandomColorsFor = function $ColorUtilities$_getRandomColorsFor$($color$$, $count$$) {
  $color$$ instanceof ColorDef || ($color$$ = colorLookup[$color$$]);
  if($color$$) {
    var $c$$ = ColorUtilities;
    if(void 0 == $c$$.colorLookupIndex) {
      $c$$.colorLookupIndex = [];
      var $dec_index$$ = 0, $i$$;
      for($i$$ in colorLookup) {
        $c$$.colorLookupIndex[$dec_index$$++] = $i$$
      }
    }
    var $c$$ = $c$$.colorLookupIndex, $dec_index$$ = parseInt($color$$.rgb.replace("#", ""), 16), $dec_index$$ = parseInt($dec_index$$ / 16777215 * ($c$$.length - $count$$)), $colors$$ = [];
    for($i$$ = 0;$i$$ < $count$$;$i$$++) {
      $colors$$.push(colorLookup[$c$$[$dec_index$$ + $i$$]].id)
    }
    return $colors$$
  }
};
ColorUtilities.search = function $ColorUtilities$search$($term$$, $lookup$$) {
  if(!$lookup$$ || 0 == $lookup$$.length) {
    $lookup$$ = colorLookup
  }
  var $r$$ = [];
  if(null != $term$$ && 0 < $term$$.length) {
    var $r1$$ = [], $r2$$ = [], $r3$$ = [], $c$$;
    for($c$$ in $lookup$$) {
      var $color$$ = $lookup$$[$c$$];
      if(!$color$$.islegacycolor) {
        var $i$$ = $color$$.name.toLowerCase().search($term$$.toLowerCase());
        0 > $i$$ && ($i$$ = String($color$$.id).search($term$$.toUpperCase()));
        var $cid$$ = $color$$.id.toLowerCase(), $d$$ = $cid$$.substring(0, $cid$$.lastIndexOf("-") + 1), $d2$$ = $cid$$.substring(0, $cid$$.lastIndexOf("-"));
        if(0 <= $i$$ || $term$$ == $d$$ || $term$$ == $cid$$ || $term$$ == $d2$$) {
          $color$$.israck || $color$$.isultra ? 0 == $i$$ ? $r1$$.push($color$$) : $r3$$.push($color$$) : $r2$$.push($color$$)
        }
      }
    }
    $c$$ = function $$c$$$($a$$, $b$$) {
      var $x$$ = $a$$.name.toLowerCase(), $y$$ = $b$$.name.toLowerCase();
      return $x$$ < $y$$ ? -1 : $x$$ > $y$$ ? 1 : 0
    };
    if(0 < $r1$$.length || 0 < $r2$$.length || 0 < $r3$$.length) {
      $r1$$.sort($c$$), $r2$$.sort($c$$), $r3$$.sort($c$$), $r$$ = $r$$.concat($r1$$).concat($r2$$).concat($r3$$)
    }
  }
  return $r$$
};
function printColor($id$$) {
  console.info(colorLookup[$id$$])
}
;var IMAGE_ROOT = "", SERVICE_ROOT = -1 !== location.host.indexOf("localhost") ? "" : "/paint";
"undefined" == typeof console && (console = {log:function $console$log$($a$$) {
}, info:function $console$info$($a$$) {
}, error:function $console$error$($a$$) {
}});
var query = location.search, DragType = {UserPalette:0, ColorSearch:1};
function $$palette() {
  console.info(userSession.palette)
}
var mouseCoords = {x:0, y:0}, mouseDown = !1, mobile = !1, currentPage = null, currentModules = [], helpManager = null, roomPicker = null, processing = null, page = null, templates = null, modal = null, help = null, colorsmart = null, curtain = null, colorCompare = null, renameProject = null, myProjects = null, saveProject = null, visualizer = null, userSession, loginInterceptedModal = null, loginInterceptedFunction = null, currentModal = null, undoRedoStack = null, colorTooltip = {display:null, 
carat:null}, _marquee = "QE-01 QE-02 QE-03 QE-04 QE-05 QE-06 QE-07 QE-08 QE-09 QE-10 QE-11 QE-12 QE-13 QE-14 QE-15 QE-16 QE-17 QE-18 QE-19 QE-20 QE-21 QE-22 QE-23 QE-24 QE-25 QE-26 QE-27 QE-28 QE-29 QE-30 QE-31 QE-32 QE-33 QE-34 QE-35 QE-36 QE-37 QE-38 QE-39 QE-40 QE-41 QE-42 QE-43 QE-44 QE-45 QE-46 QE-47 QE-48 QE-49 QE-50 QE-51 QE-52 QE-53 QE-54 QE-55 QE-56 QE-57 QE-58 QE-59 QE-60 QE-61 QE-62 QE-63 QE-64".split(" ");
function DragData($args$$) {
  if($args$$) {
    for(var $i$$ in $args$$) {
      this[$i$$] = $args$$[$i$$]
    }
  }
}
var dragOp = {dragging:!1, data:null, stopDrag:function() {
  this.dragging = !1;
  this.data = null
}, startDrag:function($data$$) {
  this.dragging = !0;
  this.data = $data$$
}};
function __preparedOverlayInjection($m$$) {
  if("overlay-signup_login-success" === $m$$.attr("id") || "overlay-color_save_success" === $m$$.attr("id")) {
    userSession.isLoggedIn() || userSession.loadUserData(getCookie("mybehr_id")), $m$$.on("remove", function() {
      loginInterceptedModal && showModal(loginInterceptedModal);
      loginInterceptedModal = null;
      console.info(loginInterceptedFunction);
      loginInterceptedFunction && setTimeout(function() {
        loginInterceptedFunction();
        loginInterceptedFunction = null
      }, 10);
      $m$$.off("remove")
    })
  }
}
var __addPreparedOverlay = addPreparedOverlay;
addPreparedOverlay = function $addPreparedOverlay$($m$$) {
  __addPreparedOverlay($m$$);
  __preparedOverlayInjection($m$$)
};
var __addPreparedOverlayShare = addPreparedOverlayShare;
addPreparedOverlayShare = function $addPreparedOverlayShare$($m$$, $s$$) {
  __addPreparedOverlayShare($m$$, $s$$);
  __preparedOverlayInjection($m$$)
};
var __overlayLoginSuccess = overlayLoginSuccess;
overlayLoginSuccess = function $overlayLoginSuccess$() {
  console.info("Replaced overlay login");
  __overlayLoginSuccess()
};
$(document).ready(function() {
  page = $("#page");
  if(!document.createElement || !document.createElement("canvas").getContext) {
    page.append($(".BrowserNotSupported"))
  }else {
    if(android = /Android/i.test(navigator.userAgent), chrome = /Chrome/i.test(navigator.userAgent), android && !chrome) {
      page.append($(".AndroidNotSupported"))
    }else {
      mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
      console.info("mobile: ", mobile);
      window.location.replace("#");
      colorsmart = $("#colorsmart");
      $("body").bind("mousedown touchstart", function($e$$) {
        mouseDown = !0
      });
      $("body").bind("mouseup touchend", function($e$$) {
        mouseDown = !1
      });
      $("body").bind("mousemove touchmove", function($e$$) {
        $e$$ = getMouseEventData($e$$);
        mouseCoords.x = $e$$.pageX;
        mouseCoords.y = $e$$.pageY
      });
      undoRedoStack = new UndoRedoStack;
      userSession = new UserSession;
      helpManager = new HelpManager;
      curtain = new Curtain($("#curtain"));
      help = $("#help");
      templates = $("#templates");
      processing = $("#proc");
      modal = $("#modal");
      roomPicker = addModuleToModal("RoomPicker");
      colorCompare = addModuleToModal(ColorCompare.NAME);
      renameProject = addModuleToModal(RenameProject.NAME);
      saveProject = addModuleToModal(SaveProject.NAME);
      startOverAlert = addModuleToModal(StartOverAlert.NAME);
      myProjects = addModuleToModal(MyProjects.NAME);
      colorTooltip.display = $(".colorTooltip");
      colorTooltip.carat = colorTooltip.display.find(".carat");
      colorTooltip.display.remove();
      $("body").append(colorTooltip.display);
      var $__color___prj_i$$ = {}, $__defaultFamily___defaultSection_bindings_projectData_q$$ = getParameterByName("family");
      $__defaultFamily___defaultSection_bindings_projectData_q$$ && ($__color___prj_i$$.family = $__defaultFamily___defaultSection_bindings_projectData_q$$);
      if($__defaultFamily___defaultSection_bindings_projectData_q$$ = getParameterByName("section")) {
        $__color___prj_i$$.section = $__defaultFamily___defaultSection_bindings_projectData_q$$
      }
      visualizer = loadModule(Visualizer.NAME, $__color___prj_i$$);
      visualizer.setPalette(userSession.palette);
      visualizer.load(_rooms);
      visualizer.attachRoomPicker(roomPicker);
      roomPicker.load(_rooms);
      page.append(visualizer.display);
      userSession.bind(UserSession.ON_LOAD, function($e$$) {
        loadUserProjectState($e$$.bindings)
      });
      $__color___prj_i$$ = getCookie("mybehr_id");
      $__color___prj_i$$ || ($__color___prj_i$$ = getCookie("userData"), null != $__color___prj_i$$ && eval("userData = " + $__color___prj_i$$));
      userSession.loadUserData($__color___prj_i$$);
      setTimeout(function() {
        getParameterByName("palette") && $(window).scrollTop(colorsmart.offset().top)
      }, 1);
      if($__color___prj_i$$ = getParameterByName("project")) {
        if(userSession.loadProject($__color___prj_i$$)) {
          undoRedoStack.clear();
          userSession._roomSelected = !0;
          window.location.hash = "paint";
          return
        }
      }else {
        if(($__color___prj_i$$ = getParameterByName("color")) && colorLookup[$__color___prj_i$$]) {
          userSession.palette.addColor(colorLookup[$__color___prj_i$$], !0);
          $__defaultFamily___defaultSection_bindings_projectData_q$$ = visualizer.room.paletteBindings;
          for($__color___prj_i$$ = 0;$__color___prj_i$$ < $__defaultFamily___defaultSection_bindings_projectData_q$$.length;$__color___prj_i$$++) {
            $__defaultFamily___defaultSection_bindings_projectData_q$$[$__color___prj_i$$] = 0
          }
          visualizer.room.setBindings($__defaultFamily___defaultSection_bindings_projectData_q$$, UndoRedoStack.IGNORE);
          window.location.hash = "paint";
          return
        }
        var $__color___prj_i$$ = getParameterByName("palette"), $colors$$ = getParameterByName("qpalette");
        if($__color___prj_i$$ || $colors$$) {
          $__defaultFamily___defaultSection_bindings_projectData_q$$ = !1;
          $colors$$ && ($__defaultFamily___defaultSection_bindings_projectData_q$$ = !0, $__color___prj_i$$ = $colors$$);
          $colors$$ = $__color___prj_i$$.split(",");
          for($__color___prj_i$$ = 0;$__color___prj_i$$ < $colors$$.length;$__color___prj_i$$++) {
            $colors$$[$__color___prj_i$$] = colorLookup[$colors$$[$__color___prj_i$$]]
          }
          if(!$__defaultFamily___defaultSection_bindings_projectData_q$$ || 4 != $colors$$.length) {
            for($__color___prj_i$$ = 0;$__color___prj_i$$ < $colors$$.length;$__color___prj_i$$++) {
              $colors$$[$__color___prj_i$$] && userSession.palette.addColor($colors$$[$__color___prj_i$$], !0)
            }
          }else {
            visualizer.applyQuadPaletteColors([-1, -1, -1, -1], $colors$$), visualizer.quadPalette.generateColors(visualizer.palette.paletteData.colors)
          }
          window.location.hash = "paint";
          undoRedoStack.clear();
          return
        }
      }
      if($__defaultFamily___defaultSection_bindings_projectData_q$$ = getCookie("projectData")) {
        if(console.info("Loading projectData from cookie"), $__defaultFamily___defaultSection_bindings_projectData_q$$ = eval("(" + $__defaultFamily___defaultSection_bindings_projectData_q$$ + ")"), console.info($__defaultFamily___defaultSection_bindings_projectData_q$$, $__defaultFamily___defaultSection_bindings_projectData_q$$.palette), $__defaultFamily___defaultSection_bindings_projectData_q$$.palette) {
          console.info("Found project palette data");
          for($__color___prj_i$$ = 0;$__color___prj_i$$ < $__defaultFamily___defaultSection_bindings_projectData_q$$.palette.length;$__color___prj_i$$++) {
            if(null != $__defaultFamily___defaultSection_bindings_projectData_q$$.palette[$__color___prj_i$$]) {
              userSession.load($__defaultFamily___defaultSection_bindings_projectData_q$$);
              break
            }
          }
        }
      }
      undoRedoStack.clear()
    }
  }
});
jQuery.fn.center = function $jQuery$fn$center$($x$$, $y$$) {
  var $o$$ = $("#colorsmart").offset();
  !1 !== $x$$ && this.css("left", Math.max(0, ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()) + "px");
  !1 !== $y$$ && this.css("top", Math.max(0, ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop() - $o$$.top / 2) + "px");
  return this
};
function shareMyBehrProject($media$$) {
  var $id$$ = userSession.saveAnonymousProject(), $id$$ = getMyBehrProjectUrl($id$$, $media$$);
  "email" == $media$$ ? showOverlayByIDshare("email_page", $id$$.URL) : "facebook" == $media$$ ? shareFBProject($id$$) : "twitter" == $media$$ ? createPopup("http://twitter.com/share?text=&url=" + $id$$.URL, "twitter", 575, 400) : "pinterest" == $media$$ && createPopup("http://pinterest.com/pin/create/button/?title=MyBEHR&media=" + $id$$.imgURL + "&description=" + $id$$.colorDesc + "&url=" + $id$$.URL, "pinterest", 667, 631)
}
function loadUserProjectState($b$$12_bindings$$1_cn_n$$) {
  visualizer.palette.clear();
  visualizer.palette.setSelectedTab(userSession.paletteIndex);
  visualizer.setUserRoomBindings(userSession.bindings);
  null != userSession.currentRoomId && !isNaN(userSession.currentRoomId) && visualizer.showRoomById(userSession.currentRoomId);
  $b$$12_bindings$$1_cn_n$$ = userSession.getCurrentRoomBindings();
  userSession.paletteQuad ? (visualizer.applyQuadPaletteColors($b$$12_bindings$$1_cn_n$$, visualizer.palette.paletteData.colors), visualizer.quadPalette.generateColors([visualizer.palette.paletteData.colors[0]])) : (visualizer.palette._setQuad(!1), visualizer.room.setBindings($b$$12_bindings$$1_cn_n$$));
  visualizer.onColorsUpdatedHandler();
  visualizer.showCoordinatedText();
  if($b$$12_bindings$$1_cn_n$$ = getCookie("vcpstatus")) {
    $b$$12_bindings$$1_cn_n$$ = $b$$12_bindings$$1_cn_n$$.split(",");
    $b$$12_bindings$$1_cn_n$$ instanceof Array || ($b$$12_bindings$$1_cn_n$$ = [$b$$12_bindings$$1_cn_n$$]);
    for(var $c$$ = visualizer.palette.paletteData.colors, $match$$ = !0, $i$$ = 0;$i$$ < $c$$.length && $match$$;$i$$++) {
      "" == $b$$12_bindings$$1_cn_n$$[$i$$] ? null != $c$$[$i$$] && ($match$$ = !1) : $b$$12_bindings$$1_cn_n$$[$i$$] != $c$$[$i$$].id && ($match$$ = !1)
    }
    $match$$ && this.visualizer.display.find(".buy").text("View Cart")
  }
  !getParameterByName("section") && !getParameterByName("family") && (window.location.hash = "paint")
}
function trySaveProject($restart$$, $forceNew$$) {
  if(userSession.projectId && !$forceNew$$) {
    if($restart$$) {
      var $success$$ = function $$success$$$() {
        startOver(!1)
      }, $error$$ = function $$error$$$() {
        userSession.unbind(UserSession.ON_UPDATE_COMPLETE, $success$$);
        userSession.unbind(UserSession.ON_ERROR, $error$$);
        alert("Something went wrong! Failed to save project.")
      };
      userSession.bind(UserSession.ON_UPDATE_COMPLETE, $success$$);
      userSession.bind(UserSession.ON_ERROR, $error$$)
    }
    console.info("Update");
    userSession.updateProject()
  }else {
    $restart$$ && (saveProject.restartAfter = !0), loginIntercept(saveProject)
  }
}
function showMyProjects() {
  loginIntercept(myProjects)
}
function loginIntercept($intercepted$$) {
  userSession.isLoggedIn() ? $intercepted$$ instanceof Modal ? showModal($intercepted$$) : "function" === typeof $intercepted$$ && $intercepted$$() : (loginInterceptedFunction = loginInterceptedModal = null, $intercepted$$ instanceof Modal ? loginInterceptedModal = $intercepted$$ : "function" === typeof $intercepted$$ && (loginInterceptedFunction = $intercepted$$), showOverlayByID("signup_login"))
}
function saveNewProject($restart$$) {
  if($restart$$) {
    var $success$$ = function $$success$$$() {
      startOver(!1)
    }, $error$$ = function $$error$$$() {
      userSession.unbind(UserSession.ON_SAVE_COMPLETE, $success$$);
      userSession.unbind(UserSession.ON_ERROR, $error$$);
      alert("Something went wrong! Failed to save your project.")
    };
    userSession.bind(UserSession.ON_SAVE_COMPLETE, $success$$);
    userSession.bind(UserSession.ON_ERROR, $error$$)
  }
  userSession.saveProject()
}
function showTooltip($name$$55_top$$, $id$$3_o$$, $left$$) {
  var $t$$ = colorTooltip.display, $c$$ = colorTooltip.carat;
  $t$$.find("span").html($name$$55_top$$.toLowerCase() + "<br>" + $id$$3_o$$);
  $id$$3_o$$ = $left$$.offset();
  $name$$55_top$$ = $id$$3_o$$.top - $t$$.outerHeight() - 10;
  $left$$ = $id$$3_o$$.left + $left$$.outerWidth() / 2 - $t$$.outerWidth() / 2;
  $t$$.css("top", $name$$55_top$$ + "px");
  $t$$.css("left", $left$$ + "px");
  $c$$.css("left", $t$$.outerWidth() / 2 - $c$$.outerWidth() / 2);
  $t$$.show()
}
function hideTooltip() {
  colorTooltip.display.hide()
}
function showStartOver() {
  showModal(startOverAlert)
}
function startOver($save$$) {
  $save$$ ? trySaveProject(!0) : (deleteCookie("projectData"), window.location.href = window.location.href.split("?")[0].split("#")[0])
}
function addModuleToModal($module$$) {
  "string" == typeof $module$$ && ($module$$ = loadModule($module$$));
  $module$$.hide();
  modal.append($module$$.display);
  return $module$$
}
function loadModule($moduleName$$, $params$$) {
  var $template$$ = loadModuleDisplay($moduleName$$);
  if(null == $template$$) {
    console.error("Failed to load module ", $moduleName$$)
  }else {
    return processing.append($template$$), new window[$moduleName$$]($template$$, $params$$)
  }
}
function loadModuleDisplay($moduleName$$1_template$$) {
  $moduleName$$1_template$$ = templates.find("." + $moduleName$$1_template$$);
  if(0 == $moduleName$$1_template$$.length) {
    return null
  }
  $moduleName$$1_template$$ = $moduleName$$1_template$$.clone();
  $moduleName$$1_template$$.addClass("module");
  return $moduleName$$1_template$$
}
function showModal($module$$, $x$$, $y$$) {
  console.info("Showing modal:", $module$$);
  hideModal();
  $module$$ && (curtain.show(), $y$$ || ($y$$ = colorsmart.offset().top), $module$$.show($x$$, $y$$));
  currentModal = $module$$;
  curtain._resize()
}
function hideModal($module$$) {
  if(null == $module$$ || void 0 == $module$$) {
    null != currentModal && ($module$$ = currentModal)
  }
  curtain.hide();
  $module$$ && $module$$.hide();
  currentModal = null
}
function HelpManager() {
  this.__closed = [];
  this.__showingHotspots = !1;
  this.showHelp = function $this$showHelp$($template$$, $forceDisplay$$) {
    var $body$$ = $("body"), $obj$$ = this;
    if(null != $template$$.attr("class")) {
      for(var $classes$$ = $template$$.attr("class").split(" "), $classesString$$ = "", $closeAA_i$$ = 0;$closeAA_i$$ < $classes$$.length;$closeAA_i$$++) {
        $classesString$$ += "." + $classes$$[$closeAA_i$$]
      }
      if(-1 == $.inArray($classesString$$, this.__closed) && 1 > help.find($classesString$$).length || !0 === $forceDisplay$$) {
        var $c$$ = $template$$.clone();
        help.append($c$$);
        $c$$.fadeIn(250);
        var $closeAA_i$$ = -1 != $.inArray("b_closeAA", $classes$$), $alwaysShow$$ = -1 != $.inArray("b_alwaysOn", $classes$$);
        $c$$.on("click", $close$$);
        var $close$$ = function $$close$$$() {
          $c$$.fadeOut(250, function() {
            $c$$.remove()
          });
          $alwaysShow$$ || $obj$$.__closed.push($classesString$$);
          $body$$.off("mousedown", null, $close$$)
        };
        $closeAA_i$$ && ($body$$.on("mousedown", null, $close$$), $(window).on("hashchange", null, $close$$))
      }
    }
  };
  this._getClassesString = function $this$_getClassesString$($classes$$1_template$$) {
    if(null == $classes$$1_template$$.attr("class")) {
      return null
    }
    $classes$$1_template$$ = $classes$$1_template$$.attr("class").split(" ");
    for(var $classesString$$ = "", $i$$ = 0;$i$$ < $classes$$1_template$$.length;$i$$++) {
      $classesString$$ += "." + $classes$$1_template$$[$i$$]
    }
    return $classesString$$
  };
  this.removeHelp = function $this$removeHelp$($cs_name$$, $permanent$$, $instant$$) {
    var $c$$ = help.find($cs_name$$);
    !1 !== $permanent$$ && ($cs_name$$ = this._getClassesString($c$$), this.__closed.push($cs_name$$));
    $instant$$ ? $c$$.remove() : $c$$.fadeOut(250, function() {
      $c$$.remove()
    })
  };
  this.closeAll = function $this$closeAll$() {
    var $h$$ = help.find(".help");
    $h$$.fadeOut(250, function() {
      $h$$.remove()
    });
    help.find(".helpFlag").fadeOut(250, function() {
      $h$$.remove()
    })
  };
  this.toggleHotspots = function $this$toggleHotspots$() {
    this.__showingHotspots ? this.hideHotspots() : this.showHotspots()
  };
  this.showHotspots = function $this$showHotspots$() {
    this.__showingHotspots = !0;
    var $obj$$ = this;
    $(".helpHotspots").fadeIn(100);
    $(".spot").on("click", function($classes$$2_e$$) {
      $classes$$2_e$$.stopImmediatePropagation();
      $classes$$2_e$$ = $(this).attr("class").split(" ");
      1 < $classes$$2_e$$.length && ($classes$$2_e$$ = $(".help." + $classes$$2_e$$[1]), console.info($classes$$2_e$$.length), 0 < $classes$$2_e$$.length && ($classes$$2_e$$ = $($classes$$2_e$$[0]), $obj$$.showHelp($classes$$2_e$$, !0)))
    })
  };
  this.hideHotspots = function $this$hideHotspots$() {
    this.__showingHotspots = !1;
    $(".helpHotspots").fadeOut(100, function() {
      $(this).hide()
    });
    $(".spot").off("click")
  }
}
function UndoRedoStack() {
  this._undo = [];
  this._redo = [];
  this._delay = null;
  this.redo = function $this$redo$() {
    if(0 < this._redo.length && null == this._delay) {
      var $obj$$ = this;
      this._delay = setTimeout(function() {
        $obj$$._delay = null
      }, 200);
      var $x$$ = this._redo.pop();
      $x$$ && $x$$.m.apply($x$$.o, $x$$.p);
      0 == this._redo.length ? $(".redo").addClass("inactive") : $(".redo").removeClass("inactive")
    }
  };
  this.undo = function $this$undo$() {
    if(0 < this._undo.length && null == this._delay) {
      var $obj$$ = this;
      this._delay = setTimeout(function() {
        $obj$$._delay = null
      }, 200);
      var $x$$ = this._undo.pop();
      $x$$ && $x$$.m.apply($x$$.o, $x$$.p);
      0 == this._undo.length ? $(".undo").addClass("inactive") : $(".undo").removeClass("inactive")
    }
  };
  this.register = function $this$register$($obj$$, $method$$, $parameters$$, $direction$$, $state$$) {
    if($direction$$ != UndoRedoStack.IGNORE) {
      if(null == $direction$$ || void 0 == $direction$$ || !1 == $direction$$) {
        $parameters$$.push(!0);
        $parameters$$.push($state$$);
        this._undo.push({o:$obj$$, m:$method$$, p:$parameters$$});
        if(null == $direction$$ || void 0 == $direction$$) {
          this._redo = [], $(".redo").addClass("inactive")
        }
        $(".undo").removeClass("inactive")
      }else {
        $parameters$$.push(!1), $parameters$$.push($state$$), this._redo.push({o:$obj$$, m:$method$$, p:$parameters$$}), $(".redo").removeClass("inactive")
      }
    }
  };
  this.updateButtons = function $this$updateButtons$() {
    0 == this._undo.length ? $(".undo").addClass("inactive") : $(".undo").removeClass("inactive");
    0 == this._redo.length ? $(".redo").addClass("inactive") : $(".redo").removeClass("inactive")
  };
  this.clear = function $this$clear$() {
    this._undo = [];
    this._redo = [];
    this.updateButtons()
  }
}
UndoRedoStack.IGNORE = "ignore";
function Curtain($display$$) {
  this.display = $display$$;
  this._hiding = !1;
  this.opaque = function $this$opaque$($value$$) {
    this.display.css("opacity", $value$$ ? 0.2 : 0)
  };
  this.show = function $this$show$() {
    this.display.show();
    this.opaque(!0);
    this._hiding = !1;
    this._resize()
  };
  this.hide = function $this$hide$() {
    var $obj$$ = this;
    this._hiding = !0;
    this.opaque(!1);
    setTimeout(function() {
      $obj$$.fadeEnd()
    }, 0.2)
  };
  this._resize = function $this$_resize$() {
    if(!this.__hiding) {
      var $o$$ = colorsmart.offset(), $b$$ = $("body");
      this.display.css("top", -$o$$.top + "px");
      this.display.width($b$$.width());
      this.display.height($b$$.height())
    }
  };
  this._init = function $this$_init$() {
    var $obj$$ = this;
    this.display.click(function($e$$) {
      hideModal()
    });
    window.onresize = function $window$onresize$($e$$) {
      $obj$$._resize()
    }
  };
  this.fadeEnd = function $this$fadeEnd$() {
    this._hiding && this.display.hide()
  };
  this._init()
}
function EventDispatcher($target$$, $eventList$$) {
  this._Events = {};
  this.target = $target$$;
  this.eventDispatcher = this;
  this.bind = function $this$bind$($event$$, $handler$$, $data$$) {
    $event$$ = $event$$.toLowerCase();
    if(void 0 != this.eventDispatcher._Events[$event$$] && "function" == typeof $handler$$) {
      for(var $firstNull$$ = -1, $i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
        if(null == this.eventDispatcher._Events[$event$$][$i$$]) {
          $firstNull$$ = $i$$;
          break
        }
      }
      -1 == $firstNull$$ && ($firstNull$$ = this.eventDispatcher._Events[$event$$].length);
      this.eventDispatcher._Events[$event$$][$firstNull$$] = [$handler$$, $data$$]
    }
  };
  this.unbind = function $this$unbind$($event$$, $handler$$) {
    $event$$ = $event$$.toLowerCase();
    if(void 0 != this.eventDispatcher._Events[$event$$]) {
      if($handler$$) {
        for(var $i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
          null != this.eventDispatcher._Events[$event$$][$i$$] && this.eventDispatcher._Events[$event$$][$i$$][0] == $handler$$ && (this.eventDispatcher._Events[$event$$][$i$$] = null)
        }
      }else {
        for($i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
          this.eventDispatcher._Events[$event$$][$i$$] = null
        }
      }
    }
  };
  this.dispatchEvent = function $this$dispatchEvent$($event$$, $eventObject$$) {
    $event$$ = $event$$.toLowerCase();
    "object" != typeof $eventObject$$ && ($eventObject$$ = {});
    if(this.eventDispatcher._Events[$event$$]) {
      for(var $i$$ = 0;$i$$ < this.eventDispatcher._Events[$event$$].length;$i$$++) {
        var $e$$ = this.eventDispatcher._Events[$event$$][$i$$];
        null != $e$$ && ($eventObject$$.data = $e$$[1], $e$$[0]($eventObject$$))
      }
    }
  };
  this.bindEvents = function $this$bindEvents$($list$$) {
    for(var $i$$ = 0;$i$$ < $list$$.length;$i$$++) {
      this._Events[$list$$[$i$$].toLowerCase()] = []
    }
  };
  this._init = function $this$_init$($eventList$$) {
    this.bindEvents($eventList$$)
  };
  this._init($eventList$$)
}
EventDispatcher.enableEvents = function $EventDispatcher$enableEvents$($target$$) {
  for(var $args$$1_e$$ = [], $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    $args$$1_e$$[$i$$ - 1] = arguments[$i$$]
  }
  $target$$.eventDispatcher ? $target$$.eventDispatcher.bindEvents($args$$1_e$$) : ($args$$1_e$$ = new EventDispatcher($target$$, $args$$1_e$$), $target$$.bind = $args$$1_e$$.bind, $target$$.unbind = $args$$1_e$$.unbind, $target$$.eventDispatcher = $args$$1_e$$, $target$$.dispatchEvent = $args$$1_e$$.dispatchEvent)
};
function Modal() {
}
Modal.prototype.show = function $Modal$$show$($x$$, $y$$) {
  this.display && (this.display.center(void 0 === $x$$, void 0 === $y$$), $x$$ && this.display.css("left", $x$$ + "px"), $y$$ && this.display.css("top", $y$$ + "px"), this.display.show())
};
Modal.prototype.hide = function $Modal$$hide$() {
  this.display.hide()
};
function syncLoader($readyCheck$$, $onReady$$) {
  if("function" == typeof $readyCheck$$) {
    var $JSCompiler_object_inline_syncInterval_0$$;
    $JSCompiler_object_inline_syncInterval_0$$ = setInterval(function() {
      $readyCheck$$() && (clearInterval($JSCompiler_object_inline_syncInterval_0$$), "function" == typeof $onReady$$ && $onReady$$())
    }, 10)
  }
}
function getMouseEventData($e$$) {
  return void 0 == $e$$.originalEvent.touches ? $e$$ : $e$$.originalEvent.touches[0] || $e$$.originalEvent.changedTouches[0]
}
function setCookie($name$$, $value$$, $days_expires$$) {
  if($days_expires$$) {
    var $date$$ = new Date;
    $date$$.setTime($date$$.getTime() + 864E5 * $days_expires$$);
    $days_expires$$ = "; expires=" + $date$$.toGMTString()
  }else {
    $days_expires$$ = ""
  }
  document.cookie = $name$$ + "=" + $value$$ + $days_expires$$ + "; path=/"
}
function setTrackingCookie() {
  document.cookie = "sessionStart=" + (new Date).getTime() + ";"
}
function getCookie($name$$) {
  $name$$ += "=";
  for(var $ca$$ = document.cookie.split(";"), $i$$ = 0;$i$$ < $ca$$.length;$i$$++) {
    for(var $c$$ = $ca$$[$i$$];" " == $c$$.charAt(0);) {
      $c$$ = $c$$.substring(1, $c$$.length)
    }
    if(0 == $c$$.indexOf($name$$)) {
      return $c$$.substring($name$$.length, $c$$.length)
    }
  }
  return null
}
function deleteCookie($name$$) {
  setCookie($name$$, "", -1)
}
function getParameterByName($name$$) {
  $name$$ = $name$$.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  $name$$ = RegExp("[\\?&]" + $name$$ + "=([^&#]*)").exec(window.location.href);
  return null == $name$$ ? null : decodeURIComponent($name$$[1].replace(/\+/g, " "))
}
"function" !== typeof String.prototype.trim && (String.prototype.trim = function $String$$trim$() {
  return this.replace(/^\s+|\s+$/g, "")
});
function RoomTemplate($id$$, $category$$, $overlay$$, $base$$, $areas$$, $highlights$$, $offsets$$, $bindings$$, $thumb$$, $isExterior$$, $surfaces$$, $compareBase$$, $compareShadow$$, $comparePaintable$$, $shadowX$$, $shadowY$$) {
  this.id = $id$$;
  this.category = $category$$;
  this.thumb = $thumb$$;
  this.overlay = $overlay$$;
  this.base = $base$$;
  this.compareBase = $compareBase$$;
  this.compareShadow = $compareShadow$$;
  this.comparePaintable = $comparePaintable$$;
  this.shadowX = $shadowX$$;
  this.shadowY = $shadowY$$;
  this.areas = $areas$$;
  this.offsets = $offsets$$;
  this.bindings = $bindings$$;
  this.highlights = $highlights$$;
  this.isExterior = $isExterior$$;
  this.surfaces = $surfaces$$;
  this.roomData = null
}
function PaintRoom($display$$, $noInput$$, $width$$, $height$$) {
  this.display = $display$$;
  EventDispatcher.enableEvents(this, PaintRoom.ON_SELECTION, PaintRoom.ON_PAINT, PaintRoom.ON_AREA_CLICK, PaintRoom.ON_BINDINGS_UPDATED, PaintRoom.ON_ITEM_DROP, PaintRoom.ON_EXTERNAL_ITEM_DROP);
  this.loadingImg = IMAGE_ROOT + "/cma/vz/vis/loader.gif";
  this.showLoader = !1;
  this.roomCanvasContext = this.roomCanvas = null;
  this.areas = [];
  this.highlights = [];
  this.base = this.overlay = null;
  this.offsets = [];
  this.overlayOffset = [];
  this.onready = null;
  this.ready = !1;
  this.selectedArea = -1;
  this.palette = null;
  this.paletteBindings = [];
  this.dragHook = null;
  this.outputWidth = $width$$;
  this.outputHeight = $height$$;
  this.suspendPainting = !1;
  this.bindPalette = function $this$bindPalette$($palette$$, $defaultBindings$$) {
    this.palette = $palette$$;
    this.paletteBindings = $defaultBindings$$;
    for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
      this.paintSectionByIndex(this.palette.colors[this.paletteBindings[$i$$]], $i$$)
    }
    this.palette.bind("onColorsUpdated", this.paletteColorUpdatedHandler, [this])
  };
  this.disable = function $this$disable$($e$$) {
    this.dragHook.disable()
  };
  this.enable = function $this$enable$($e$$) {
    this.dragHook.enable()
  };
  this.isPainted = function $this$isPainted$() {
    for(var $i$$ = 0;$i$$ < this.paletteBindings.length;$i$$++) {
      if(null != this.palette.getColor(this.paletteBindings[$i$$])) {
        return!0
      }
    }
    return!1
  };
  this.isAreaPainted = function $this$isAreaPainted$($areaIndex$$) {
    return null != this.palette.getColor(this.paletteBindings[$areaIndex$$]) ? !0 : !1
  };
  this.paletteColorUpdatedHandler = function $this$paletteColorUpdatedHandler$($e$$26_obj$$) {
    $e$$26_obj$$ = $e$$26_obj$$.data[0];
    $e$$26_obj$$.suspendPainting = !0;
    for(var $i$$ = 0;$i$$ < $e$$26_obj$$.areas.length;$i$$++) {
      $e$$26_obj$$.paintSectionByIndex($e$$26_obj$$.palette.colors[$e$$26_obj$$.paletteBindings[$i$$]], $i$$)
    }
    $e$$26_obj$$.suspendPainting = !1;
    $e$$26_obj$$.paint()
  };
  this.clearPaletteBindings = function $this$clearPaletteBindings$() {
    for(var $bindings$$ = [], $i$$ = 0;$i$$ < this.paletteBindings.length;$i$$++) {
      $bindings$$.push(-1)
    }
    this.setBindings($bindings$$)
  };
  this.clearSelectedPaletteBinding = function $this$clearSelectedPaletteBinding$() {
    if(-1 != this.selectedArea) {
      for(var $bindings$$ = [], $b$$ = 0;$b$$ < this.paletteBindings.length;$b$$++) {
        $bindings$$.push(this.paletteBindings[$b$$])
      }
      $bindings$$[this.selectedArea] = -1;
      this.setBindings($bindings$$);
      this.clearSelectedArea()
    }
  };
  this.setBindings = function $this$setBindings$($bindings$$, $undoredoflag$$) {
    for(var $currentBindings_e$$ = [], $b$$15_i$$ = 0;$b$$15_i$$ < this.paletteBindings.length;$b$$15_i$$++) {
      $currentBindings_e$$.push(this.paletteBindings[$b$$15_i$$])
    }
    if(!$bindings$$) {
      $bindings$$ = [];
      for($b$$15_i$$ = 0;$b$$15_i$$ < $currentBindings_e$$.length;$b$$15_i$$++) {
        $bindings$$[$b$$15_i$$] = -1
      }
    }
    for($b$$15_i$$ = 0;$b$$15_i$$ < this.areas.length;$b$$15_i$$++) {
      "number" == typeof $bindings$$[$b$$15_i$$] && (this.paletteBindings[$b$$15_i$$] = $bindings$$[$b$$15_i$$], this.paintSectionByIndexBinding($b$$15_i$$))
    }
    undoRedoStack.register(this, this.setBindings, [$currentBindings_e$$], $undoredoflag$$);
    $currentBindings_e$$ = {};
    $currentBindings_e$$.bindings = $bindings$$;
    this.dispatchEvent(PaintRoom.ON_BINDINGS_UPDATED, $currentBindings_e$$)
  };
  this.unbindPalette = function $this$unbindPalette$() {
    this.palette.unbind("onColorsUpdated", this.paletteColorUpdateHandler)
  };
  this.updateSelectedArea = function $this$updateSelectedArea$($index$$) {
    if(-1 < this.selectedArea && null != this.palette) {
      for(var $bindings$$ = [], $b$$ = 0;$b$$ < this.paletteBindings.length;$b$$++) {
        $bindings$$.push(this.paletteBindings[$b$$])
      }
      this.palette.getColor($index$$);
      $bindings$$[this.selectedArea] = $index$$;
      this.setBindings($bindings$$)
    }
  };
  this.updateBinding = function $this$updateBinding$($e$$, $paletteIndex$$, $undoredoflag$$) {
    undoRedoStack.register(this, this.updateBinding, [$e$$, this.paletteBindings[$e$$]], $undoredoflag$$);
    this.paletteBindings[$e$$] = $paletteIndex$$;
    this.paintSectionByIndex(this.palette.getColor($paletteIndex$$), $e$$);
    $e$$ = {};
    $e$$.bindings = this.paletteBindings;
    this.dispatchEvent(PaintRoom.ON_BINDINGS_UPDATED, $e$$)
  };
  this.loadRoom = function $this$loadRoom$($template$$, $savedBindings$$) {
    this.ready = !1;
    this.offsets = $template$$.offsets;
    this.overlayOffset = [$template$$.shadowX, $template$$.shadowY];
    var $obj$$ = this;
    this.paletteBindings = $savedBindings$$ instanceof Array ? $savedBindings$$ : $template$$.bindings;
    null == this.roomCanvas && (this.roomCanvas = document.createElement("canvas"), this.roomCanvas.width = this.display.width(), this.roomCanvas.height = this.display.height(), this.display.append(this.roomCanvas), this.roomCanvas = $(this.roomCanvas), this.roomCanvasContext = this.roomCanvas[0].getContext("2d"), this.loadingImg = $("<div class='loader'><img src='" + this.loadingImg + "'/></div>"), this.display.append(this.loadingImg));
    this.showLoader && this.loadingImg.show();
    var $count$$ = Math.floor(this.offsets.length / 2);
    this.areas = [];
    this.highlights = [];
    for(var $i$$0$$ = 0;$i$$0$$ < $count$$;$i$$0$$++) {
      var $highlight_image$$ = new Image;
      $highlight_image$$.src = PaintRoom.IMAGE_ROOT + $template$$.areas[$i$$0$$];
      this.areas[$i$$0$$] = $highlight_image$$;
      $highlight_image$$ = new Image;
      $highlight_image$$.src = PaintRoom.IMAGE_ROOT + $template$$.highlights[$i$$0$$];
      this.highlights[$i$$0$$] = $highlight_image$$;
      isNaN(this.paletteBindings[$i$$0$$]) && (this.paletteBindings[$i$$0$$] = 0)
    }
    this.overlay = new Image;
    this.overlay.src = PaintRoom.IMAGE_ROOT + $template$$.overlay;
    this.base = new Image;
    this.base.src = PaintRoom.IMAGE_ROOT + $template$$.base;
    syncLoader(function isLoaded() {
      for(var $i$$ = 0;$i$$ < $obj$$.areas.length;$i$$++) {
        if(!$obj$$.areas[$i$$].complete || !$obj$$.highlights[$i$$].complete) {
          return!1
        }
      }
      return $obj$$.base.complete && $obj$$.overlay.complete
    }, function ready() {
      for(var $i$$ = 0;$i$$ < $obj$$.areas.length;$i$$++) {
        $obj$$.areas[$i$$] = ColorUtilities.createCanvas($obj$$.areas[$i$$]), $obj$$.highlights[$i$$] = ColorUtilities.createCanvas($obj$$.highlights[$i$$]), $obj$$.paintSectionByIndexBinding($i$$, !1)
      }
      $obj$$.ready = !0;
      $obj$$.loadingImg.hide();
      for($i$$ = 0;$i$$ < $obj$$.areas.length;$i$$++) {
        $obj$$.paintSectionByIndexBinding($i$$, !1)
      }
      if(void 0 != $obj$$.onready) {
        $obj$$.onready()
      }
      $obj$$.suspendPainting = !1;
      $obj$$.clearSelectedArea()
    })
  };
  this.paintSelectedArea = function $this$paintSelectedArea$($color$$) {
    0 <= this.selectedArea && this.paintSectionByIndex($color$$, this.selectedArea)
  };
  this.paintSectionByIndexBinding = function $this$paintSectionByIndexBinding$($index$$, $update$$) {
    var $color$$ = this.palette.getColor(this.paletteBindings[$index$$]);
    this.paintSectionByIndex($color$$, $index$$, $update$$)
  };
  this.paintSectionByIndex = function $this$paintSectionByIndex$($color$$, $index$$, $update$$) {
    if(this.ready && !(0 > $index$$ || $index$$ >= this.areas.length)) {
      if($index$$ = this.areas[$index$$], !(0 == $index$$.width || 0 == $index$$.height)) {
        var $imageData$$ = $index$$.getContext("2d").getImageData(0, 0, $index$$.width, $index$$.height), $rawData$$ = $imageData$$.data;
        if(null == $color$$ || void 0 == $color$$) {
          $color$$ = nullColor
        }
        $color$$ = $color$$.rgb.substr(1);
        $color$$ = parseInt("0x" + $color$$, "0x");
        for(var $i$$ = 0;$i$$ < $rawData$$.length;$i$$ += 4) {
          $rawData$$[$i$$] = ($color$$ & 16711680) >> 16, $rawData$$[$i$$ + 1] = ($color$$ & 65280) >> 8, $rawData$$[$i$$ + 2] = $color$$ & 255
        }
        $index$$.getContext("2d").putImageData($imageData$$, 0, 0);
        !1 != $update$$ && this.paint()
      }
    }
  };
  this.paintSection = function $this$paintSection$($color$$13_crgb$$1_rgbNoHash$$, $section$$1_x$$, $imageData$$1_y$$) {
    console.info("Coming through paintsection");
    if(this.ready && ($section$$1_x$$ = this.getSection($section$$1_x$$, $imageData$$1_y$$), null != $section$$1_x$$)) {
      $imageData$$1_y$$ = $section$$1_x$$.getContext("2d").getImageData(0, 0, $section$$1_x$$.width, $section$$1_x$$.height);
      var $rawData$$ = $imageData$$1_y$$.data;
      $color$$13_crgb$$1_rgbNoHash$$ = $color$$13_crgb$$1_rgbNoHash$$.rgb.substr(1);
      $color$$13_crgb$$1_rgbNoHash$$ = parseInt("0x" + $color$$13_crgb$$1_rgbNoHash$$, "0x");
      for(var $i$$ = 0;$i$$ < $rawData$$.length;$i$$ += 4) {
        $rawData$$[$i$$] = ($color$$13_crgb$$1_rgbNoHash$$ & 16711680) >> 16, $rawData$$[$i$$ + 1] = ($color$$13_crgb$$1_rgbNoHash$$ & 65280) >> 8, $rawData$$[$i$$ + 2] = $color$$13_crgb$$1_rgbNoHash$$ & 255
      }
      $section$$1_x$$.getContext("2d").putImageData($imageData$$1_y$$, 0, 0);
      this.paint()
    }
  };
  this.toggleAreaSelection = function $this$toggleAreaSelection$($x$$, $y$$) {
    var $a$$ = this.getSectionIndex($x$$, $y$$);
    this.setSelectedArea(this.selectedArea == $a$$ ? -1 : $a$$)
  };
  this.selectArea = function $this$selectArea$($x$$, $y$$) {
    var $a$$ = this.getSectionIndex($x$$, $y$$);
    this.selectedArea != $a$$ && this.setSelectedArea($a$$)
  };
  this.clearSelectedArea = function $this$clearSelectedArea$() {
    this.setSelectedArea(-1)
  };
  this.toggleSelectedArea = function $this$toggleSelectedArea$($a$$) {
    this.selectedArea == $a$$ && ($a$$ = -1);
    this.setSelectedArea($a$$)
  };
  this.setSelectedArea = function $this$setSelectedArea$($area$$) {
    this.selectedArea = $area$$;
    this.paint();
    var $e$$ = {};
    $e$$.area = $area$$;
    this.dispatchEvent(PaintRoom.ON_SELECTION, $e$$)
  };
  this.getSection = function $this$getSection$($x$$, $y$$) {
    var $i$$ = this.getSectionIndex($x$$, $y$$);
    return 0 <= $i$$ ? this.areas[$i$$] : null
  };
  this.getSectionIndex = function $this$getSectionIndex$($x$$, $y$$) {
    for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
      var $area$$ = this.areas[$i$$], $lx$$ = $x$$ - this.offsets[2 * $i$$], $ly$$ = $y$$ - this.offsets[2 * $i$$ + 1];
      if(!(0 > $lx$$ || 0 > $ly$$ || $lx$$ >= $area$$.width || $ly$$ >= $area$$.height) && $area$$.getContext && 0 < $area$$.getContext("2d").getImageData($lx$$, $ly$$, 1, 1).data[3]) {
        return $i$$
      }
    }
    return-1
  };
  this.paint = this.outputWidth ? function() {
    if(this.ready && !this.suspendPainting) {
      this.roomCanvasContext.drawImage(this.base, 0, 0, this.outputWidth, this.outputHeight);
      for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
        this.roomCanvasContext.drawImage(this.areas[$i$$], this.offsets[2 * $i$$] || 0, this.offsets[2 * $i$$ + 1] || 0, this.outputWidth, this.outputHeight)
      }
      this.roomCanvasContext.drawImage(this.overlay, this.overlayOffset[0] || 0, this.overlayOffset[1] || 0, this.outputWidth, this.outputHeight);
      -1 != this.selectedArea && this.roomCanvasContext.drawImage(this.highlights[this.selectedArea], this.offsets[2 * this.selectedArea] || 0, this.offsets[2 * this.selectedArea + 1] || 0, this.outputWidth, this.outputHeight);
      this.dispatchEvent(PaintRoom.ON_PAINT)
    }
  } : function() {
    if(this.ready && !this.suspendPainting) {
      this.roomCanvasContext.drawImage(this.base, 0, 0);
      for(var $i$$ = 0;$i$$ < this.areas.length;$i$$++) {
        this.roomCanvasContext.drawImage(this.areas[$i$$], this.offsets[2 * $i$$] || 0, this.offsets[2 * $i$$ + 1] || 0)
      }
      this.roomCanvasContext.drawImage(this.overlay, this.overlayOffset[0] || 0, this.overlayOffset[1] || 0);
      -1 != this.selectedArea && this.roomCanvasContext.drawImage(this.highlights[this.selectedArea], this.offsets[2 * this.selectedArea] || 0, this.offsets[2 * this.selectedArea + 1] || 0);
      this.dispatchEvent(PaintRoom.ON_PAINT)
    }
  };
  var $obj$$0$$ = this;
  !0 != $noInput$$ && (this.display.on("click", function($e$$30_y$$) {
    var $a$$ = $obj$$0$$.display.offset(), $x$$ = $e$$30_y$$.pageX - $a$$.left;
    $e$$30_y$$ = $e$$30_y$$.pageY - $a$$.top;
    $a$$ = $obj$$0$$.getSectionIndex($x$$, $e$$30_y$$);
    if(0 <= $a$$) {
      var $ne$$ = {};
      $ne$$.area = $a$$;
      $ne$$.x = $x$$;
      $ne$$.y = $e$$30_y$$;
      $obj$$0$$.dispatchEvent(PaintRoom.ON_AREA_CLICK, $ne$$)
    }
  }), mobile || (this.display.on("mousemove", function($e$$) {
    !dragOp.dragging && !currentModal && $obj$$0$$.selectArea($e$$.pageX - $obj$$0$$.roomCanvas.offset().left, $e$$.pageY - $obj$$0$$.roomCanvas.offset().top)
  }), this.display.on("mouseout", function($e$$) {
    $obj$$0$$.selectArea(-1)
  })), this.display.droppable({drop:function($e$$, $u$$) {
    var $src$$ = $u$$.draggable.data("src"), $color$$ = $src$$.color, $x$$ = $e$$.pageX - $obj$$0$$.roomCanvas.offset().left, $y$$ = $e$$.pageY - $obj$$0$$.roomCanvas.offset().top, $sectionIndex$$ = $obj$$0$$.getSectionIndex($x$$, $y$$);
    if($src$$.type === DragType.UserPalette && !currentModal) {
      0 <= $sectionIndex$$ && $obj$$0$$.updateBinding($sectionIndex$$, $src$$.index), 0 <= $obj$$0$$.selectedArea && $obj$$0$$.clearSelectedArea(), $obj$$0$$.dispatchEvent(PaintRoom.ON_ITEM_DROP, $de$$)
    }else {
      if($src$$.type === DragType.ColorSearch && -1 < $sectionIndex$$) {
        var $de$$ = {};
        $de$$.x = $x$$;
        $de$$.y = $y$$;
        $de$$.surfaceIndex = $sectionIndex$$;
        $de$$.item = $color$$;
        $de$$.ui = $u$$;
        $obj$$0$$.dispatchEvent(PaintRoom.ON_EXTERNAL_ITEM_DROP, $de$$)
      }
    }
  }}))
}
PaintRoom.IMAGE_ROOT = IMAGE_ROOT + "/cma/vz/PreviewImages/";
PaintRoom.ON_SELECTION = "onSelection";
PaintRoom.ON_PAINT = "onPaint";
PaintRoom.ON_AREA_CLICK = "onAreaClick";
PaintRoom.ON_BINDINGS_UPDATED = "onBindingsUpdated";
PaintRoom.ON_ITEM_DROP = "onItemDrop";
PaintRoom.ON_EXTERNAL_ITEM_DROP = "onExternalItemDrop";
function Palette($fixedLength$$) {
  this.fixedLength = !1 === $fixedLength$$ ? !1 : !0;
  this.condense = !0;
  this.colors = Array(this.fixedLength ? Palette.FIXED_LENGTH : 0);
  EventDispatcher.enableEvents(this, Palette.ON_COLORS_UPDATED);
  this.notifyColorsUpdate = function $this$notifyColorsUpdate$($indices$$) {
    for(var $colors$$ = [], $e$$34_i$$ = 0;$e$$34_i$$ < $indices$$.length;$e$$34_i$$++) {
      $colors$$[$e$$34_i$$] = this.colors[$indices$$[$e$$34_i$$]]
    }
    $e$$34_i$$ = {};
    $e$$34_i$$.colors = $colors$$;
    $e$$34_i$$.indices = $indices$$;
    this.dispatchEvent(Palette.ON_COLORS_UPDATED, $e$$34_i$$)
  };
  this.removeColor = function $this$removeColor$($color$$) {
    for(var $newColors$$ = [], $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      if(this.colors[$i$$] != $color$$) {
        $newColors$$[$i$$] = this.colors[$i$$]
      }else {
        var $e$$ = {};
        $e$$.color = $color$$;
        $e$$.index = $i$$;
        this.dispatchEvent("onRemove", $e$$)
      }
    }
    this.setColors($newColors$$)
  };
  this.addColor = function $this$addColor$($color$$, $i$$, $undoredoflag$$) {
    if(!(!0 == $i$$ && this.hasColor($color$$))) {
      for($i$$ = 0;$i$$ < this.colors.length;$i$$++) {
        if(null == this.colors[$i$$]) {
          this.setColor($color$$, $i$$, $undoredoflag$$);
          return
        }
      }
      this.fixedLength ? (showModal(replaceColor, 10, 100), replaceColor.updateReplaceableColors($color$$)) : this.setColor($color$$, this.colors.length, $undoredoflag$$)
    }
  };
  this.swapColors = function $this$swapColors$($index1$$, $index2$$, $t$$2_undoredoflag$$) {
    undoRedoStack.register(this, this.swapColors, [$index1$$, $index2$$], $t$$2_undoredoflag$$);
    $t$$2_undoredoflag$$ = this.colors[$index1$$];
    this.colors[$index1$$] = this.colors[$index2$$];
    this.colors[$index2$$] = $t$$2_undoredoflag$$;
    this.notifyColorsUpdate([$index1$$, $index2$$])
  };
  this.setColor = function $this$setColor$($color$$, $index$$, $undoredoflag$$) {
    -1 == $index$$ ? (showModal(replaceColor, 10, 100), replaceColor.updateReplaceableColors($color$$)) : this.fixedLength && $index$$ >= Palette.FIXED_LENGTH ? console.error("Palette is fixed length, can't set an index above " + (Palette.FIXED_LENGTH - 1)) : (undoRedoStack.register(this, this.setColor, [this.getColor($index$$), $index$$], $undoredoflag$$), this.colors[$index$$] = $color$$, this.notifyColorsUpdate([$index$$]))
  };
  this.indexOf = function $this$indexOf$($color$$) {
    for(var $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      if(this.colors[$i$$] === $color$$) {
        return $i$$
      }
    }
    return-1
  };
  this.getColor = function $this$getColor$($index$$) {
    return this.colors[$index$$]
  };
  this.clear = function $this$clear$() {
    for(var $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      this.colors[$i$$] = null, this.fixedLength && this.notifyColorsUpdate([$i$$])
    }
    this.fixedLength || (this.colors = [])
  };
  this.hasColor = function $this$hasColor$($color$$) {
    "string" == typeof $color$$ && ($color$$ = colorDef[$color$$]);
    for(var $x$$ = 0;$x$$ < this.colors.length;$x$$++) {
      if($color$$ === this.colors[$x$$]) {
        return!0
      }
    }
    return!1
  };
  this.numColors = function $this$numColors$() {
    for(var $n$$ = 0, $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      null != this.colors[$i$$] && $n$$++
    }
    return $n$$
  };
  this.size = function $this$size$() {
    return this.colors.length
  }
}
Palette.FIXED_LENGTH = 8;
Palette.ON_COLORS_UPDATED = "onColorsUpdated";
Palette.prototype.setColors = function $Palette$$setColors$($colors$$, $undoredoflag$$) {
  if($undoredoflag$$ != UndoRedoStack.IGNORE) {
    for(var $currentColors_updatedColors$$ = [], $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      $currentColors_updatedColors$$[$i$$] = this.colors[$i$$]
    }
    undoRedoStack.register(this, this.setColors, [$currentColors_updatedColors$$], $undoredoflag$$)
  }
  $currentColors_updatedColors$$ = [];
  if(this.fixedLength) {
    for($i$$ = 0;$i$$ < Palette.FIXED_LENGTH;$i$$++) {
      this.colors[$i$$] != $colors$$[$i$$] && ($currentColors_updatedColors$$.push($i$$), this.colors[$i$$] = $colors$$[$i$$])
    }
    0 < $currentColors_updatedColors$$.length && this.notifyColorsUpdate([$currentColors_updatedColors$$])
  }else {
    this.clear();
    for($i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      this.addColor($colors$$[$i$$], !0, UndoRedoStack.IGNORE)
    }
  }
};
function QuadPalette($display$$) {
  this.display = $display$$;
  this.palettes = [];
  this.selected = 0;
  this.paletteContainers = null;
  this.isUpdating = this.updateQuadColors = !1;
  this.visibleSwatches = 8;
  EventDispatcher.enableEvents(this, "onSwatchClick");
  this.resetPagination = function $this$resetPagination$() {
    this.paletteContainers.css("left", "0px");
    this.selected = 0;
    this.checkPrevNextArrows()
  };
  this.checkPrevNextArrows = function $this$checkPrevNextArrows$() {
    this.display.find(".btnPrev").addClass("inactive");
    this.palettes.length <= this.visibleSwatches ? this.display.find(".btnNext").addClass("inactive") : this.display.find(".btnNext").removeClass("inactive")
  };
  this.getNext = function $this$getNext$() {
    this.display.find(".btnPrev").removeClass("inactive");
    this.selected >= this.palettes.length - this.visibleSwatches || (this.selected >= this.palettes.length - 2 * this.visibleSwatches && this.display.find(".btnNext").addClass("inactive"), this.selected += 8, this.paletteContainers.css("left", -69 * this.selected + "px"))
  };
  this.getPrev = function $this$getPrev$() {
    this.display.find(".btnNext").removeClass("inactive");
    0 >= this.selected || (this.selected -= this.visibleSwatches, this.paletteContainers.css("left", -69 * this.selected + "px"), this.selected < this.visibleSwatches && this.display.find(".btnPrev").addClass("inactive"))
  };
  this.updatePalettes = function $this$updatePalettes$($colors$$) {
    $colors$$ instanceof Array || ($colors$$ = []);
    for(var $i$$ = 0;12 > $i$$;$i$$++) {
      for(var $p$$ = new Palette, $c$$ = 0;4 > $c$$;$c$$++) {
        if($colors$$[$c$$] instanceof ColorDef) {
          $p$$.addColor($colors$$[$c$$], !1, UndoRedoStack.IGNORE)
        }else {
          var $index$$ = Math.floor(100 * Math.random()), $r$$ = 0, $found$$ = !1, $blah$$;
          for($blah$$ in colorLookup) {
            if($r$$++ == $index$$) {
              $p$$.addColor(colorLookup[$blah$$], !1, UndoRedoStack.IGNORE);
              $found$$ = !0;
              break
            }
          }
          $found$$ || $p$$.addColor(nullColor, !1, UndoRedoStack.IGNORE)
        }
      }
      this.palettes[$i$$] = $p$$
    }
    this.updateUI()
  };
  this.refreshPalettes = function $this$refreshPalettes$($palettes$$) {
    this.palettes = [];
    this.resetPagination();
    for(var $i$$ = 0;$i$$ < $palettes$$.length;$i$$++) {
      for(var $p$$ = new Palette, $c$$ = 0;4 > $c$$;$c$$++) {
        null != colorLookup[$palettes$$[$i$$][$c$$]] ? $p$$.addColor(colorLookup[$palettes$$[$i$$][$c$$]], !1, UndoRedoStack.IGNORE) : $p$$.addColor(nullColor, !1, UndoRedoStack.IGNORE)
      }
      this.palettes[$i$$] = $p$$
    }
    this.updateUI()
  };
  this.updateUI = function $this$updateUI$() {
    var $obj$$ = this, $i$$40_palettes$$ = $display$$.find(".palette"), $paletteTemplate$$ = $($i$$40_palettes$$[0]);
    $i$$40_palettes$$.remove();
    for($i$$40_palettes$$ = 0;$i$$40_palettes$$ < this.palettes.length;$i$$40_palettes$$++) {
      var $clone$$ = $paletteTemplate$$.clone(), $c1$$ = this.palettes[$i$$40_palettes$$].getColor(0), $c2$$ = this.palettes[$i$$40_palettes$$].getColor(1), $c3$$ = this.palettes[$i$$40_palettes$$].getColor(2), $c4$$ = this.palettes[$i$$40_palettes$$].getColor(3);
      $c1$$ instanceof ColorDef && $($clone$$.find(".color1")).css("background-color", $c1$$.rgb);
      $c2$$ instanceof ColorDef && $($clone$$.find(".color2")).css("background-color", $c2$$.rgb);
      $c3$$ instanceof ColorDef && $($clone$$.find(".color3")).css("background-color", $c3$$.rgb);
      $c4$$ instanceof ColorDef && $($clone$$.find(".color4")).css("background-color", $c4$$.rgb);
      this.paletteContainers.append($clone$$)
    }
    $display$$.find(".palette").each(function() {
      var $item$$ = $(this), $index$$ = $item$$.index();
      $item$$.on("click", function() {
        var $palette$$ = $obj$$.palettes[$index$$], $e$$ = {};
        $e$$.colors = [$palette$$.getColor(0), $palette$$.getColor(1), $palette$$.getColor(2), $palette$$.getColor(3)];
        $e$$.index = $index$$;
        $e$$.ui = this;
        for(var $palette$$ = [], $x$$ = 0;$x$$ < $e$$.colors.length;$x$$++) {
          userSession.palette.hasColor($e$$.colors[$x$$]) && 3 > $palette$$.length && $palette$$.push($e$$.colors[$x$$])
        }
        $obj$$.updateQuadColors = !0;
        $obj$$.dispatchEvent("onSwatchClick", $e$$);
        $obj$$.display.find(".selected").removeClass("selected");
        $item$$.addClass("selected")
      })
    });
    this.checkPrevNextArrows()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.paletteContainers = $display$$.find(".palettes");
    this.display.find(".suggestedPalettes").find(".btnNext").on("click", function($e$$) {
      $obj$$.getNext()
    });
    this.display.find(".suggestedPalettes").find(".btnPrev").on("click", function($e$$) {
      $obj$$.getPrev()
    })
  };
  this.generateColors = function $this$generateColors$($colors$$0$$) {
    for(var $obj$$ = this, $colorIds$$ = "", $quadPalettes$$ = [], $cnt_webservice$$ = 0, $n$$ = 0;$n$$ < $colors$$0$$.length;$n$$++) {
      null != $colors$$0$$[$n$$] && 2 > $cnt_webservice$$ && ($colorIds$$ += $colors$$0$$[$n$$].id + "/", $cnt_webservice$$++)
    }
    $cnt_webservice$$ = SERVICE_ROOT + "/services/color/fourcolor/" + $colorIds$$;
    0 < $colorIds$$.length && $.getJSON($cnt_webservice$$, function($colors$$) {
      $colors$$ = $colors$$.fourcolor.split(",");
      for(var $numPalettes$$ = $colors$$.length, $x$$ = 0;$x$$ < $numPalettes$$;$x$$ += 4) {
        if($x$$ + 4 <= $colors$$.length) {
          var $quadColors$$ = [];
          $quadColors$$.push($colors$$[$x$$]);
          $quadColors$$.push($colors$$[$x$$ + 1]);
          $quadColors$$.push($colors$$[$x$$ + 2]);
          $quadColors$$.push($colors$$[$x$$ + 3]);
          $quadPalettes$$.push($quadColors$$)
        }
      }
    }).success(function() {
      $obj$$.refreshPalettes($quadPalettes$$)
    }).error(function() {
      var $colorIds$$1_numPalettes$$ = ColorUtilities._getRandomColorsFor($colors$$0$$[0], 40);
      void 0 != $colors$$0$$[1] && ($colorIds$$1_numPalettes$$ = $colorIds$$1_numPalettes$$.concat(ColorUtilities._getRandomColorsFor($colors$$0$$[1], 40)));
      void 0 != $colors$$0$$[2] && ($colorIds$$1_numPalettes$$ = $colorIds$$1_numPalettes$$.concat(ColorUtilities._getRandomColorsFor($colors$$0$$[2], 40)));
      $colors$$0$$ = $colorIds$$1_numPalettes$$.toString().split(",");
      for(var $colorIds$$1_numPalettes$$ = $colors$$0$$.length, $x$$ = 0;$x$$ < $colorIds$$1_numPalettes$$;$x$$ += 4) {
        if($x$$ + 4 <= $colors$$0$$.length) {
          var $quadColors$$ = [];
          $quadColors$$.push($colors$$0$$[$x$$]);
          $quadColors$$.push($colors$$0$$[$x$$ + 1]);
          $quadColors$$.push($colors$$0$$[$x$$ + 2]);
          $quadColors$$.push($colors$$0$$[$x$$ + 3]);
          $quadPalettes$$.push($quadColors$$)
        }
      }
      $obj$$.refreshPalettes($quadPalettes$$)
    })
  };
  this.init()
}
;function RowPalette($display$$) {
  this.display = $display$$;
  this.paletteData = this.tabMenu = null;
  this.selectedTab = -1;
  this.tabTemplate = this.tabContainerList = this.tabContainer = null;
  this.isQuad = !1;
  this._oldQuad = this.featuredColorDetailsLink = null;
  this._quadColors = [];
  this._originalQuadColors = [];
  EventDispatcher.enableEvents(this, "onTabClick", "onColorsUpdated", "onModify", "onRemove", "onDetails", "onSave", "onPaletteFull", "onPreviewUpdated", "onSelectChange");
  this.featured = {chip:null, title:null, id:null};
  this.previewQuad = this.previewColor = null;
  this.setRoomMessageType = function $this$setRoomMessageType$($type$$) {
    for(var $n$$ = this.display.find(".featured .text"), $nc$$ = $n$$.attr("class").split(" "), $i$$ = 0;$i$$ < $nc$$.length;$i$$++) {
      "text" !== $nc$$[$i$$] && $n$$.removeClass($nc$$[$i$$])
    }
    $n$$.addClass($type$$)
  };
  this.clear = function $this$clear$() {
    this._quadColors = [];
    this._originalQuadColors = [];
    this._oldQuad = null;
    this.isQuad = !1;
    this.previewQuad = this.previewColor = null
  };
  this.getTab = function $this$getTab$($i$$) {
    return this.display.find(".colorTab:nth-child(" + ($i$$ + 1) + ")")
  };
  this.setSelectedTab = function $this$setSelectedTab$($e$$39_i$$) {
    var $oldSelect$$ = this.selectedTab;
    if(void 0 === $e$$39_i$$) {
      if(this.getColor(this.selectedTab)) {
        $e$$39_i$$ = this.selectedTab
      }else {
        var $found$$ = !1;
        for($e$$39_i$$ = 0;$e$$39_i$$ < this.paletteSize();$e$$39_i$$++) {
          if(this.getColor($e$$39_i$$)) {
            $found$$ = !0;
            break
          }
        }
        $found$$ || ($e$$39_i$$ = null)
      }
    }
    this.hasSelectedTab() && ($found$$ = this.getTab(this.selectedTab), $found$$.removeClass("active"));
    null === $e$$39_i$$ ? this.selectedTab = -1 : (this.selectedTab = $e$$39_i$$, $found$$ = this.getTab($e$$39_i$$), $found$$.addClass("active"));
    userSession && userSession.setPaletteIndex(this.selectedTab);
    $oldSelect$$ !== this.selectedTab && ($e$$39_i$$ = {}, $e$$39_i$$.selectedTab = this.selectedTab, this.dispatchEvent("onSelectChange", $e$$39_i$$))
  };
  this.clearSelectedTab = function $this$clearSelectedTab$() {
    this.setSelectedTab(null)
  };
  this.hasSelectedTab = function $this$hasSelectedTab$() {
    return 0 <= this.selectedTab && 8 > this.selectedTab
  };
  this.getSelectedColor = function $this$getSelectedColor$() {
    return this.getColor(this.selectedTab)
  };
  this.getColor = function $this$getColor$($index$$) {
    return this.paletteData.getColor($index$$)
  };
  this.setColor = function $this$setColor$($color$$, $index$$, $undoredoflag$$) {
    if(!this.paletteData.hasColor($color$$)) {
      var $maintainQuad$$ = !1;
      if(this.isQuad) {
        var $c1$$4_i$$ = this._quadColors[$index$$];
        console.info(this._quadColors, $index$$);
        15 > ColorUtilities.colorCompareDE1994($c1$$4_i$$.luminosity, $c1$$4_i$$.a, $c1$$4_i$$.b, $color$$.luminosity, $color$$.a, $color$$.b) && ($maintainQuad$$ = !0, $c1$$4_i$$ = this._quadColors[$index$$], this._quadColors[$index$$] = $color$$, this.display.find(".color" + ($index$$ + 1)).css("background-color", $color$$.rgb), undoRedoStack.register(this, this.setColor, [$c1$$4_i$$, $index$$], $undoredoflag$$))
      }
      if(void 0 === $index$$ || null === $index$$) {
        for($c1$$4_i$$ = 0;$c1$$4_i$$ < this.paletteSize();$c1$$4_i$$++) {
          if(null == this.getColor($c1$$4_i$$)) {
            $index$$ = $c1$$4_i$$;
            break
          }
        }
        if(void 0 === $index$$ || null === $index$$) {
          this.dispatchEvent("onPaletteFull", {});
          return
        }
      }
      for(var $colors$$ = [], $c1$$4_i$$ = 0;$c1$$4_i$$ < this.paletteData.colors.length;$c1$$4_i$$++) {
        if($color$$ || $index$$ != $c1$$4_i$$) {
          $colors$$[$c1$$4_i$$] = this.paletteData.colors[$c1$$4_i$$]
        }
      }
      $color$$ && ($colors$$[$index$$] = $color$$);
      $maintainQuad$$ ? this._setColors($colors$$, !0, UndoRedoStack.IGNORE) : this.setColors($colors$$, $undoredoflag$$);
      this.setSelectedTab($index$$);
      return $index$$
    }
  };
  this._setQuad = function $this$_setQuad$($isQuad$$) {
    (this.isQuad = $isQuad$$) ? (this.tabContainer.addClass("isquad"), 6 === $(".list").children(".colorTab").length && $(".list div.colorTab:last-child").remove()) : this.tabContainer.removeClass("isquad");
    userSession && (userSession.paletteQuad = $isQuad$$)
  };
  this.setQuad = function $this$setQuad$($colors$$, $undoredoflag$$) {
    this._quadColors = $colors$$;
    this._originalQuadColors = [];
    for(var $i$$ = 0;4 > $i$$;$i$$++) {
      this._originalQuadColors[$i$$] = $colors$$[$i$$]
    }
    this._setColors($colors$$, !0, $undoredoflag$$);
    this.display.find(".color1").css("background-color", $colors$$[0].rgb);
    this.display.find(".color2").css("background-color", $colors$$[1].rgb);
    this.display.find(".color3").css("background-color", $colors$$[2].rgb);
    this.display.find(".color4").css("background-color", $colors$$[3].rgb);
    this.display.find(".ui-draggable").draggable({disabled:!1})
  };
  this._setColors = function $this$_setColors$($colors$$, $isQuad$$, $undoredoflag$$) {
    if($undoredoflag$$ != UndoRedoStack.IGNORE) {
      for(var $currentColors$$ = [], $i$$ = 0;$i$$ < this.paletteData.colors.length;$i$$++) {
        $currentColors$$[$i$$] = this.paletteData.colors[$i$$]
      }
      undoRedoStack.register(this, this._setColors, [$currentColors$$, this.isQuad], $undoredoflag$$)
    }
    this._setQuad($isQuad$$);
    this.paletteData.setColors($colors$$, UndoRedoStack.IGNORE);
    this.setSelectedTab()
  };
  this.setColors = function $this$setColors$($colors$$, $undoredoflag$$) {
    this._setColors($colors$$, !1, $undoredoflag$$)
  };
  this.numColors = function $this$numColors$() {
    return this.paletteData.numColors()
  };
  this.addColor = function $this$addColor$($color$$, $undoredoflag$$) {
    return this.setColor($color$$, void 0, $undoredoflag$$)
  };
  this.hasColor = function $this$hasColor$($color$$) {
    return this.paletteData.hasColor($color$$)
  };
  this.paletteSize = function $this$paletteSize$() {
    return this.paletteData.size()
  };
  this.indexOf = function $this$indexOf$($color$$) {
    return this.paletteData.indexOf($color$$)
  };
  this.removeColor = function $this$removeColor$($color$$, $undoredoignore$$) {
    for(var $colors$$ = [], $i$$ = 0;$i$$ < this.paletteData.colors.length;$i$$++) {
      var $c$$ = this.paletteData.colors[$i$$];
      $c$$ != $color$$ && $colors$$.push($c$$)
    }
    this.setColors($colors$$, $undoredoignore$$);
    this.setPreviewColor(null)
  };
  this.setPalette = function $this$setPalette$($palette$$) {
    this.paletteData = $palette$$;
    var $obj$$ = this;
    this.paletteData.bind("onColorsUpdated", function($e$$) {
      $obj$$.updateTabDisplay();
      0 < $obj$$.numColors() ? ($obj$$.display.find(".featured").hide(), $obj$$.tabContainer.show()) : ($obj$$.display.find(".featured").show(), $obj$$.tabContainer.hide());
      var $colors$$ = [$obj$$.getColor(0), $obj$$.getColor(1), $obj$$.getColor(2), $obj$$.getColor(3)];
      if($obj$$.isQuad && ($obj$$._quadColors[0] !== $colors$$[0] || $obj$$._quadColors[1] !== $colors$$[1] || $obj$$._quadColors[2] !== $colors$$[2] || $obj$$._quadColors[3] !== $colors$$[3])) {
        $obj$$._setQuad(!1), 8 > $obj$$.numColors() && $obj$$.addTab()
      }
      $obj$$.dispatchEvent("onColorsUpdated", $e$$)
    });
    this.updateTabDisplay()
  };
  this.updateTabDisplay = function $this$updateTabDisplay$($color$$0$$, $index$$0$$) {
    function $wire$$($outer$$, $color$$, $index$$) {
      var $i$$ = $outer$$.find(".slot");
      $outer$$.find(".item").remove();
      if(null != $color$$) {
        $i$$.find(".img").hide();
        var $item$$ = $i$$.clone();
        $item$$.removeClass("slot");
        $item$$.addClass("item");
        var $swatch$$ = $item$$.find(".colorSwatch");
        $swatch$$.css("background-color", $color$$.rgb);
        $item$$.find(".text").html($color$$.name.toLowerCase() + "<br/><span>" + $color$$.id + "</span>");
        $item$$.find(".remove").on("click", function($e$$) {
          $e$$.stopPropagation();
          $e$$ = {};
          $e$$.color = $color$$;
          $e$$.index = $index$$;
          $obj$$.dispatchEvent("onRemove", $e$$);
          return!1
        });
        $i$$.before($item$$);
        var $data$$ = new DragData({color:$color$$, index:$index$$, type:DragType.UserPalette});
        $item$$.draggable({revert:!0, cursorAt:{top:20, left:20}, helper:function() {
          return $swatch$$.clone()
        }, revertDuration:50, distance:14, start:function() {
          dragOp.startDrag($data$$)
        }, stop:function() {
          setTimeout(function() {
            $item$$.css("top", "");
            $item$$.css("left", "")
          }, 50);
          dragOp.stopDrag()
        }}).data("src", $data$$);
        $item$$.find("input:checkbox").on("click", function($e$$) {
          $obj$$.setCompare($index$$, this.checked);
          $e$$.stopPropagation()
        });
        $item$$.on("click", function($e$$43_event$$) {
          $e$$43_event$$ = {};
          $e$$43_event$$.index = $index$$;
          $e$$43_event$$.color = $color$$;
          $e$$43_event$$.tab = $($outer$$);
          $obj$$.getColor($index$$) && $obj$$.setSelectedTab($index$$);
          $obj$$.dispatchEvent("onTabClick", $e$$43_event$$)
        });
        $i$$ = $outer$$.find(".tabMenu");
        $i$$.find(".details").on("click", function($e$$) {
          $e$$ = {};
          $e$$.index = $index$$;
          $e$$.color = $color$$;
          $obj$$.dispatchEvent("onDetails", $e$$)
        });
        $i$$.find(".save").on("click", function($e$$) {
          $e$$ = {};
          $e$$.index = $index$$;
          $e$$.color = $color$$;
          $obj$$.dispatchEvent("onSave", $e$$)
        })
      }
    }
    var $obj$$ = this, $numColors$$ = this.numColors();
    this.tabContainerList.html("");
    for($index$$0$$ = 0;$index$$0$$ < $numColors$$;$index$$0$$++) {
      this.addTab();
      var $outer$$ = $obj$$.getTab($index$$0$$);
      $color$$0$$ = this.getColor($index$$0$$);
      $wire$$($outer$$, $color$$0$$, $index$$0$$)
    }
    8 > $numColors$$ && !this.isQuad && this.addTab();
    this.setSelectedTab(this.selectedTab)
  };
  this.previewRoom = null;
  this.loadPreviewRoom = function $this$loadPreviewRoom$($t$$3_template$$) {
    $t$$3_template$$ = new RoomTemplate("-1", "", $t$$3_template$$.compareShadow, $t$$3_template$$.compareBase, [$t$$3_template$$.comparePaintable], [$t$$3_template$$.comparePaintable], [0, 0], [0], null, !1, null, null, null, null, null, null);
    this.previewRoom.loadRoom($t$$3_template$$, null)
  };
  this.initFeatured = function $this$initFeatured$() {
    var $obj$$ = this, $f$$ = this.display.find(".preview"), $room$$ = loadModuleDisplay("PaintRoom");
    $f$$.append($room$$);
    this.previewRoom = new PaintRoom($room$$, !0, 190, 136);
    this.previewRoom.palette = new Palette;
    this.previewRoom.onready = function $this$previewRoom$onready$() {
      $obj$$.paintPreviewRoom($obj$$.previewQuad ? $obj$$.previewQuad[0] : $obj$$.previewColor)
    };
    this.featured.chip = this.display.find(".featured .chip");
    this.featured.name = this.display.find(".featured .name");
    this.featured.id = this.display.find(".featured .id");
    $f$$ = this.display.find(".featured .quad .palette div");
    $f$$.on("mouseover", function($color$$29_e$$) {
      $color$$29_e$$ = $obj$$.previewQuad[$(this).index()];
      showTooltip($color$$29_e$$.name, $color$$29_e$$.id, $(this))
    });
    $f$$.on("mouseout", function($e$$) {
      hideTooltip()
    })
  };
  this.paintPreviewRoom = function $this$paintPreviewRoom$($color$$) {
    !$color$$ && this.hasSelectedTab() ? this.previewRoom.paintSectionByIndex(this.getSelectedColor(), 0) : $color$$ && this.previewRoom.paintSectionByIndex($color$$, 0)
  };
  this.transitionQuad = function $this$transitionQuad$() {
    var $n$$ = [this.getColor(0), this.getColor(1), this.getColor(2), this.getColor(3)];
    this.setPreviewQuad($n$$);
    this._oldQuad = $n$$;
    this.setColors([], UndoRedoStack.IGNORE)
  };
  this.setPreviewColor = function $this$setPreviewColor$($color$$) {
    if(!$color$$) {
      if(0 < this.numColors() && this.hasSelectedTab()) {
        $color$$ = this.getSelectedColor()
      }else {
        return
      }
    }
    this.featuredColorDetailsLink.text("Color Details");
    this.previewColor = $color$$;
    this.setPreviewQuad(null);
  this.display.find(".featured .inner").html("<span class='name'>" + $color$$.name + "</span><br/><span class='id'>" + $color$$.id + "</span>");
    this.featured.chip.css("background-color", $color$$.rgb);
    this.featured.name.html($color$$.name.toLowerCase());
    this.featured.id.html($color$$.id);
    this.paintPreviewRoom($color$$);
    var $o$$ = {};
    $o$$.color = $color$$;
    this.dispatchEvent("onPreviewUpdated", $o$$)
  };
  this.setPreviewQuad = function $this$setPreviewQuad$($colors$$) {
    if(this.previewQuad = $colors$$) {
      this.featuredColorDetailsLink.text("Palette Details");
      this.setColors([], UndoRedoStack.IGNORE);
      this.display.find(".featured").addClass("isQuad");
      this.display.find(".color1").css("background-color", $colors$$[0].rgb);
      this.display.find(".color2").css("background-color", $colors$$[1].rgb);
      this.display.find(".color3").css("background-color", $colors$$[2].rgb);
      this.display.find(".color4").css("background-color", $colors$$[3].rgb);
      this.display.find(".featured .inner").html("<span class='name'>" + $colors$$[0].name + "</span><br/><span class='id'>" + $colors$$[0].id + "</span>");
      this.paintPreviewRoom($colors$$[0]);
      this.display.find(".ui-draggable").draggable({disabled:!0});
      var $o$$ = {};
      $o$$.quad = $colors$$;
      this.dispatchEvent("onPreviewUpdated", $o$$)
    }else {
      this.display.find(".featured").removeClass("isQuad")
    }
  };
  this.addTab = function $this$addTab$() {
    var $obj$$ = this, $tab$$ = this.tabTemplate.clone();
    this.tabContainerList.append($tab$$);
    $tab$$.on("click", function($e$$48_event$$) {
      $e$$48_event$$ = {};
      $e$$48_event$$.index = $($tab$$).index();
      $e$$48_event$$.color = $obj$$.getColor($e$$48_event$$.index);
      $e$$48_event$$.tab = $($tab$$);
      $obj$$.dispatchEvent("onTabClick", $e$$48_event$$)
    });
    $tab$$.droppable({drop:function($e$$, $u$$) {
      var $src$$ = $u$$.draggable.data("src"), $color$$ = $src$$.color, $index$$ = $tab$$.index();
      $src$$.type === DragType.ColorSearch ? userSession.palette.hasColor($color$$) || $obj$$.setColor($color$$, $index$$) : $src$$.type === DragType.UserPalette && ($index$$ != $src$$.index && $obj$$.getColor($index$$) instanceof ColorDef) && ($u$$.draggable.detach(), $obj$$.paletteData.swapColors($index$$, $src$$.index), $obj$$.selectedTab == $index$$ ? $obj$$.setSelectedTab($src$$.index) : $obj$$.selectedTab === $src$$.index && $obj$$.setSelectedTab($index$$))
    }})
  };
  this.init = function $this$init$() {
    function $wireDrag$$($item$$, $index$$) {
      var $data$$ = new DragData({color:null, index:$index$$, type:DragType.UserPalette});
      $item$$.draggable({revert:!0, cursorAt:{top:20, left:20}, helper:function() {
        var $s$$ = $swatch$$.clone();
        $s$$.css("background-color", $obj$$.getColor($index$$).rgb);
        return $s$$
      }, revertDuration:$revertDuration$$, distance:14, start:function() {
        $data$$.color = $obj$$.getColor($index$$);
        $item$$.data("src", $data$$);
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }})
    }
    function $wireClick$$($item$$, $index$$) {
      $item$$.on("click", function() {
        $obj$$.setSelectedTab($index$$)
      })
    }
    var $obj$$ = this;
    this.tabContainer = $display$$.find(".tabs");
    this.tabContainerList = this.tabContainer.find(".list");
    this.tabTemplate = this.tabContainerList.find(".colorTab");
    this.tabTemplate.remove();
    this.setPalette(new Palette);
    var $f$$6_x$$ = this.display.find(".tabs .quad .palette div");
    $f$$6_x$$.on("mouseover", function($color$$33_e$$) {
      $color$$33_e$$ = $obj$$.getColor($(this).index());
      showTooltip($color$$33_e$$.name, $color$$33_e$$.id, $(this))
    });
    $f$$6_x$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    this.initFeatured();
    for(var $revertDuration$$ = 50, $swatch$$ = this.tabTemplate.find(".colorSwatch"), $f$$6_x$$ = 0;4 > $f$$6_x$$;$f$$6_x$$++) {
      var $n$$ = this.display.find(".color" + ($f$$6_x$$ + 1));
      $wireDrag$$($n$$, $f$$6_x$$);
      $wireClick$$($n$$, $f$$6_x$$)
    }
    this.featuredColorDetailsLink = this.display.find(".featured .details");
    this.featuredColorDetailsLink.on("click", function($e$$) {
      $e$$ = {};
      null != $obj$$.previewQuad ? $e$$.colors = $obj$$.previewQuad : $e$$.color = $obj$$.previewColor;
      $obj$$.dispatchEvent("onDetails", $e$$)
    });
    this.display.find(".featured .save").on("click", function($e$$) {
      $e$$ = {};
      $obj$$.previewQuad ? $e$$.colors = $obj$$.previewQuad : $e$$.color = $obj$$.previewColor;
      $obj$$.dispatchEvent("onSave", $e$$)
    })
  };
  this.init()
}
;function SinglePalette($display$$) {
  this.display = $display$$;
  this._colorTemplate = this._colorsContainer = null;
  this._palettes = {};
  this._nextButton = this._prevButton = null;
  this._selected = 0;
  this.visibleSwatches = 8;
  EventDispatcher.enableEvents(this, "onSwatchClick", Palette.ON_COLORS_UPDATED);
  this.refreshColorSet = function $this$refreshColorSet$($colors$$) {
    for(var $colorIds$$ = [], $i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      $colors$$[$i$$] && ($colorIds$$[$i$$] = $colors$$[$i$$].id)
    }
    for($i$$ in this._palettes) {
      0 > $.inArray($i$$, $colorIds$$) && (this._palettes[$i$$].display.detach(), delete this._palettes[$i$$])
    }
    for($i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      $colors$$[$i$$] && this._addColor($colors$$[$i$$])
    }
    this._checkPrevNextArrows()
  };
  this.numColors = function $this$numColors$() {
    var $n$$ = 0, $i$$;
    for($i$$ in this._palettes) {
      $n$$ += this._palettes[$i$$].numColors()
    }
    return $n$$
  };
  this._addColor = function $this$_addColor$($color$$) {
    if($color$$) {
      var $webservice$$ = SERVICE_ROOT + "/services/color/similar/" + $color$$.id, $obj$$ = this, $p$$ = this._palettes[$color$$.id];
      if(!$p$$) {
        $p$$ = new SinglePaletteDisplay($("<div class='palettes'></div>"), this._colorTemplate);
        this._palettes[$color$$.id] = $p$$;
        $p$$.bind(SinglePalette.ON_SWATCH_CLICK, function($e$$) {
          $obj$$.dispatchEvent(SinglePalette.ON_SWATCH_CLICK, $e$$)
        });
        $p$$.bind(Palette.ON_COLORS_UPDATED, function($e$$) {
          $obj$$._checkPrevNextArrows()
        });
        var $__setColors$$ = function $$__setColors$$$($list$$) {
          var $cs$$ = [], $i$$;
          for($i$$ in $list$$) {
            var $c$$ = colorLookup[$list$$[$i$$]];
            $c$$ && $cs$$.push($c$$)
          }
          $p$$.setColors($cs$$, UndoRedoStack.IGNORE)
        };
        $.getJSON($webservice$$, function($json$$1_s$$) {
          $json$$1_s$$ = $json$$1_s$$.similar.split(",");
          $__setColors$$($json$$1_s$$)
        }).error(function() {
          var $s$$ = ColorUtilities._getRandomColorsFor($color$$.id, 7).toString().split(",");
          $__setColors$$($s$$)
        })
      }
      $p$$.display.detach();
      this._colorsContainer.append($p$$.display)
    }
  };
  this._checkPrevNextArrows = function $this$_checkPrevNextArrows$() {
    0 == this._selected ? this._prevButton.addClass("inactive") : this._prevButton.removeClass("inactive");
    this._selected <= this.numColors() - this.visibleSwatches ? this._nextButton.removeClass("inactive") : this._nextButton.addClass("inactive");
    for(var $numColors$$ = this.numColors();this._selected > $numColors$$;) {
      this._selected -= this.visibleSwatches
    }
    this._colorsContainer.css("left", -69 * this._selected + "px")
  };
  this._getNext = function $this$_getNext$() {
    this._selected >= this.numColors() - this.visibleSwatches || (this._selected += this.visibleSwatches, this._checkPrevNextArrows())
  };
  this._getPrev = function $this$_getPrev$() {
    0 >= this._selected || (this._selected -= this.visibleSwatches, this._checkPrevNextArrows())
  };
  var $obj$$0$$ = this;
  this._colorsContainer = this.display.find(".colors");
  this._colorTemplate = this.display.find(".palette").filter(":first");
  this._colorTemplate.remove();
  this._nextButton = this.display.find(".btnNext");
  this._nextButton.on("click", function() {
    $obj$$0$$._getNext()
  });
  this._prevButton = this.display.find(".btnPrev");
  this._prevButton.on("click", function() {
    $obj$$0$$._getPrev()
  })
}
SinglePalette.ON_SWATCH_CLICK = "onSwatchClick";
function SinglePaletteDisplay($display$$, $template$$) {
  Palette.call(this, !1);
  this.display = $display$$;
  this._template = $template$$;
  EventDispatcher.enableEvents(this, SinglePalette.ON_SWATCH_CLICK);
  this.setColors = function $this$setColors$($colors$$, $undoredoflag$$) {
    Palette.prototype.setColors.call(this, $colors$$, $undoredoflag$$);
    this.display.html("");
    for(var $i$$ = 0;$i$$ < this.colors.length;$i$$++) {
      var $swatch$$ = this._createDisplay($i$$);
      this.display.append($swatch$$)
    }
  };
  this._createDisplay = function $this$_createDisplay$($index$$) {
    var $obj$$ = this, $clone$$ = this._template.clone(), $color$$ = this.colors[$index$$];
    $clone$$.css("background-color", $color$$.rgb);
    $clone$$.on("click", function() {
      var $event$$ = {};
      $event$$.color = $color$$;
      $obj$$.dispatchEvent(SinglePalette.ON_SWATCH_CLICK, $event$$)
    });
    var $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
    $clone$$.draggable({revert:!0, revertDuration:50, distance:14, cursorAt:{top:20, left:20}, helper:function() {
      return $clone$$.clone()
    }, scroll:!1, appendTo:"body", start:function() {
      dragOp.startDrag($data$$)
    }, stop:function() {
      dragOp.stopDrag()
    }}).data("src", $data$$);
    $clone$$.on("mouseover", function($e$$) {
      t = $(this);
      showTooltip($color$$.name, $color$$.id, t)
    });
    $clone$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    return $clone$$
  }
}
SinglePaletteDisplay.prototype = new Palette;
function UserSession() {
  this.userId = null;
  this.palette = new Palette;
  this.savedColors = [];
  this.bindings = [];
  this.paletteQuad = !1;
  this.paletteIndex = 0;
  this.projectName = "My Project";
  this.projectId = null;
  this.autosave = !0;
  this.projectsList = [];
  this.currentRoomId = null;
  this.loginInProgress = this._autosaveInProgress = !1;
  this._serviceUrl = "http://" + window.location.host;
  this._roomSelected = !1;
  EventDispatcher.enableEvents(this, UserSession.ON_LOAD, UserSession.ON_SAVED_COLOR_ADDED, UserSession.ON_SAVED_COLOR_REMOVED, UserSession.ON_BINDINGS_UPDATED, UserSession.ON_PROJECT_NAME_UPDATED, UserSession.ON_PROJECTS_LIST_LOADED, UserSession.ON_PALETTE_UPDATED, UserSession.ON_SAVE_BEGIN, UserSession.ON_SAVE_COMPLETE, UserSession.ON_ERROR, UserSession.ON_DELETE, UserSession.ON_UPDATE_BEGIN, UserSession.ON_UPDATE_COMPLETE, UserSession.ON_LOGIN, UserSession.ON_CART_ADD_SUCCESS, UserSession.ON_CART_ADD_FAIL);
  this.isLoggedIn = function $this$isLoggedIn$() {
    return this.userId ? !0 : !1
  };
  this.setProjectName = function $this$setProjectName$($name$$) {
    this.projectName = $name$$;
    var $e$$ = {};
    $e$$.name = $name$$;
    this.dispatchEvent(UserSession.ON_PROJECT_NAME_UPDATED, $e$$);
    this.checkAutosave()
  };
  this.setPaletteIndex = function $this$setPaletteIndex$($index$$) {
    this.paletteIndex = $index$$;
    this.checkAutosave()
  };
  this.setCurrentRoomId = function $this$setCurrentRoomId$($id$$) {
    this.currentRoomId = $id$$;
    this.checkAutosave()
  };
  this.clearBindings = function $this$clearBindings$($templateId$$) {
    delete this.bindings[$templateId$$]
  };
  this.setBindings = function $this$setBindings$($templateId$$, $bindings$$) {
    for(var $clear$$ = !0, $i$$ = 0;$i$$ < $bindings$$.length;$i$$++) {
      if(-1 != $bindings$$[$i$$]) {
        $clear$$ = !1;
        break
      }
    }
    $clear$$ ? this.clearBindings($templateId$$) : this.bindings[$templateId$$] = $bindings$$;
    this.checkAutosave()
  };
  this.getCurrentRoomBindings = function $this$getCurrentRoomBindings$() {
    var $b$$ = this.bindings[this.currentRoomId];
    return $b$$ ? $b$$ : null
  };
  this.checkAutosave = function $this$checkAutosave$() {
    if(this.autosave && !this._autosaveInProgress) {
      var $obj$$ = this;
      this._autosaveInProgress = !0;
      setTimeout(function() {
        $obj$$.save();
        $obj$$._autosaveInProgress = !1
      }, UserSession.AUTO_SAVE_DELAY)
    }
  };
  this.load = function $this$load$($data$$, $projectId$$) {
    console.info("userSession.load", $data$$, $projectId$$);
    this.projectId = $projectId$$ ? $projectId$$ : null;
    this.bindings = [];
    if($data$$) {
      if($data$$.projectName) {
        this.projectName = $data$$.projectName;
        var $e$$ = {};
        $e$$.name = this.projectName;
        this.dispatchEvent(UserSession.ON_PROJECT_NAME_UPDATED, $e$$)
      }
      this.bindings = [];
      var $e$$ = !1, $palette$$ = [null, null, null, null, null, null, null, null];
      if($data$$.palette) {
        for(var $fi_hasRoomData_room$$ = 0, $i$$ = 0;8 > $i$$;$i$$++) {
          var $id$$ = $data$$.palette[$i$$];
          $id$$ && ($palette$$[$fi_hasRoomData_room$$++] = colorLookup[$id$$], $e$$ = !0)
        }
      }
      if($data$$.rooms) {
        $fi_hasRoomData_room$$ = !1;
        for($i$$ in $data$$.rooms) {
          $fi_hasRoomData_room$$ = $data$$.rooms[$i$$], console.info($fi_hasRoomData_room$$), this.bindings[$fi_hasRoomData_room$$.id] = $fi_hasRoomData_room$$.bindings, $fi_hasRoomData_room$$ = !0
        }
        if($fi_hasRoomData_room$$ || $e$$) {
          this._roomSelected = !0
        }
      }
      this.palette.setColors($palette$$, UndoRedoStack.IGNORE);
      this.paletteQuad = $data$$.paletteQuad ? !0 : !1;
      this.paletteIndex = void 0 === $data$$.paletteIndex ? 0 : $data$$.paletteIndex;
      this.currentRoomId = $data$$.currentRoomId;
      this.userId == $data$$.userId ? $data$$.projectId && (this.projectId = $data$$.projectId) : this.projectId = null;
      $e$$ = {};
      $e$$.bindings = $data$$.rooms;
      this.dispatchEvent(UserSession.ON_LOAD, $e$$);
      this.checkAutosave()
    }
  };
  this.loadUserData = function $this$loadUserData$($id$$) {
    (this.userId = $id$$) && this.getFavoriteColors()
  };
  this.save = function $this$save$() {
    var $cookie$$ = this._getProjectJson();
    setCookie("projectData", JSON.stringify($cookie$$), 0)
  };
  this._init = function $this$_init$() {
    var $obj$$ = this;
    this.palette.bind("onColorsUpdated", function() {
      $obj$$.checkAutosave()
    })
  };
  this.getBlankProjectJson = function $this$getBlankProjectJson$() {
    return{userId:null, projectId:null, projectName:"", projectType:"interior", palette:[], paletteIndex:0, paletteQuad:!1, currentRoomId:null, rooms:null}
  };
  this._getProjectJson = function $this$_getProjectJson$() {
    var $json$$ = this.getBlankProjectJson();
    $json$$.userId = this.userId;
    $json$$.projectId = this.projectId;
    $json$$.projectName = this.projectName;
    $json$$.paletteIndex = this.paletteIndex;
    $json$$.paletteQuad = this.paletteQuad;
    $json$$.currentRoomId = this.currentRoomId;
    $json$$.rooms = this._getBindingsJson();
    for(var $i$$ = 0;$i$$ < this.palette.colors.length;$i$$++) {
      var $color$$ = this.palette.colors[$i$$];
      $json$$.palette.push(null == $color$$ ? null : $color$$.id)
    }
    return $json$$
  };
  this._getBindingsJson = function $this$_getBindingsJson$() {
    for(var $r$$ = [], $c$$ = 0;$c$$ < this.bindings.length;$c$$++) {
      var $binding$$ = this.bindings[$c$$];
      $binding$$ && $r$$.push({id:$c$$, bindings:$binding$$})
    }
    return $r$$
  };
  this.addToCart = function $this$addToCart$($colors$$) {
    function $addSamplesToCartMain$$($colorCodes_samples$$) {
      $colorCodes_samples$$ = $colorCodes_samples$$.split(",");
      for(var $colorCode$$ = "", $noSample$$ = !1, $noSampleString$$ = "", $numAdded$$ = 0, $productInfo$$, $i$$ = 0;$i$$ < $colorCodes_samples$$.length;$i$$++) {
        if($colorCode$$ = $colorCodes_samples$$[$i$$], 0 < $colorCode$$.length) {
          var $colorName$$1_url$$ = "http://" + getUserServiceURL() + "/omsproductservice/services/getOmsByColorId?colorId=" + $colorCode$$;
          $.ajax({type:"get", url:$colorName$$1_url$$, dataType:"json", contentType:"application/json; charset=utf-8", async:!1, crossDomain:!0, success:function($response$$) {
            $productInfo$$ = JSON.stringify($response$$)
          }, error:function($xhr$$) {
            alert("Error connecting or sending data to service. Pleaes try again.")
          }});
          $productInfo$$ && ("[]" == $productInfo$$ || "" == $productInfo$$ || 5 > $productInfo$$.length) ? ($noSample$$ = !0, $colorName$$1_url$$ = getColorInformation($colorCode$$).split(",")[0], $noSampleString$$ += '<div class="fl" style="width:100%"><h4><img src="/colorsmart4/ColorChipPNGServlet?width=20&height=20&border=thin&colorCode=' + $colorCode$$ + '&bgcolor=FFFFFF" class="fl" style="margin:0 10px 0 0;" />' + $colorName$$1_url$$ + " " + $colorCode$$ + "</h4></div>") : (addToCart($colorCode$$), 
          $numAdded$$++)
        }
      }
      handleOverlayCloseClick();
      $noSample$$ ? ($("#overlay-no_samples div.overlay_content_row-static div.no-samples-list").html($noSampleString$$), showOverlayByID("no_samples")) : showOverlayByID("success_samples");
      return $numAdded$$
    }
    $colors$$ instanceof Array || ($colors$$ = [$colors$$]);
    for(var $samples$$ = "", $colorIds$$ = [], $n$$ = [], $i$$0$$ = 0;$i$$0$$ < $colors$$.length;$i$$0$$++) {
      $colorIds$$[$i$$0$$] = $colors$$[$i$$0$$] instanceof ColorDef ? $colors$$[$i$$0$$].id : null, $n$$[$i$$0$$] = $colors$$[$i$$0$$]
    }
    $colors$$ = $n$$;
    $i$$0$$ = readCookie("behr_shoppingcart");
    if(null != $i$$0$$) {
      $n$$ = $i$$0$$.split(":");
      for($i$$0$$ = 0;$i$$0$$ < $n$$.length - 1;$i$$0$$++) {
        var $cartItem_index$$ = $n$$[$i$$0$$].split(","), $cartItem_index$$ = $.inArray($cartItem_index$$[0], $colorIds$$);
        -1 < $cartItem_index$$ && ($colors$$[$cartItem_index$$] = null)
      }
    }
    for($i$$0$$ = 0;$i$$0$$ < $colors$$.length;$i$$0$$++) {
      $colors$$[$i$$0$$] && (0 < $samples$$.length && ($samples$$ += ","), $samples$$ += $colors$$[$i$$0$$].id)
    }
    showOverlayByID("adding_samples");
    var $obj$$ = this;
    window.setTimeout(function() {
      var $amount$$ = $addSamplesToCartMain$$($samples$$);
      console.info("Amount added:", $amount$$);
      0 < $amount$$ ? (console.info("Dispatching success"), $obj$$.dispatchEvent(UserSession.ON_CART_ADD_SUCCESS, {})) : (console.info("Dispatching fail"), $obj$$.dispatchEvent(UserSession.ON_CART_ADD_FAIL, {}))
    }, 500)
  };
  this.addFavoriteColor = function $this$addFavoriteColor$($color$$) {
    if(0 > $.inArray($color$$, this.savedColors)) {
      var $obj$$ = this;
      $.ajax({type:"post", accept:"application/json", headers:{Accept:"application/json", "Content-Type":"application/json"}, dataType:"json", url:this._serviceUrl + "/usercolor/nextgen/addusercolor", async:!1, data:'{"AddUserColorsVO":{"colors":["' + $color$$.id + '"],"userId":"' + this.userId + '"}}', success:function($e$$60_response$$) {
        $color$$.userColorId = $e$$60_response$$.userColorList[0].userColorId;
        0 > $.inArray($color$$, $obj$$.savedColors) && ($obj$$.savedColors.push($color$$), $e$$60_response$$ = {}, $e$$60_response$$.color = $color$$, $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_ADDED, $e$$60_response$$));
        showOverlayByID("color_save_success");
        setTimeout("handleOverlayCloseClick()", 1E4)
      }, error:function($xhr$$) {
        showOverlayByID("color_save_fail");
        console.log("fail")
      }})
    }
  };
  this.getFavoriteColors = function $this$getFavoriteColors$() {
    console.info("GET FAVORITE COLORS CALLED");
    var $e$$61_url$$ = this._serviceUrl + "/usercolor/nextgen/getusercolors?userid=" + this.userId + "&isoldcolorontop=true", $obj$$ = this;
    $obj$$.savedColors = [];
    $.ajax({type:"get", url:$e$$61_url$$, headers:{"Content-Type":"text/plain"}, async:!0, success:function($l$$4_response$$) {
      if($l$$4_response$$ = $l$$4_response$$.userColorList) {
        for(var $i$$ = 0;$i$$ < $l$$4_response$$.length;$i$$++) {
          var $c$$22_color$$ = colorLookup[$l$$4_response$$[$i$$].colorId];
          if($c$$22_color$$ && 0 > $.inArray($c$$22_color$$, $obj$$.savedColors) && ($c$$22_color$$.userColorId = $l$$4_response$$[$i$$].userColorId, $obj$$.savedColors.push($c$$22_color$$), $c$$22_color$$ = colorLookup[$c$$22_color$$.id])) {
            var $e$$ = {};
            $e$$.color = $c$$22_color$$;
            $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_ADDED, $e$$)
          }
        }
      }
    }, error:function($xhr$$) {
      console.info("Failed to load user colors")
    }});
    $e$$61_url$$ = {};
    $e$$61_url$$.colors = $obj$$.savedColors;
    $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_ADDED, $e$$61_url$$)
  };
  this._deleteFavoriteColorById = function $this$_deleteFavoriteColorById$($id$$) {
    var $obj$$ = this;
    $.ajax({type:"get", url:this._serviceUrl + "/usercolor/nextgen/deleteusercolors/" + $id$$, headers:{"Content-Type":"application/json"}, dataType:"json", async:!1, success:function($c$$23_i$$59_response$$) {
      for($c$$23_i$$59_response$$ = 0;$c$$23_i$$59_response$$ < $obj$$.savedColors.length;$c$$23_i$$59_response$$++) {
        if($obj$$.savedColors[$c$$23_i$$59_response$$].userColorId === $id$$) {
          $c$$23_i$$59_response$$ = $obj$$.savedColors.splice($c$$23_i$$59_response$$, 1);
          var $e$$ = {};
          $e$$.color = $c$$23_i$$59_response$$[0];
          $obj$$.dispatchEvent(UserSession.ON_SAVED_COLOR_REMOVED, $e$$);
          return!0
        }
      }
    }, error:function($xhr$$) {
      console.error("Failed to delete color")
    }});
    return!1
  };
  this.removeFavoriteColor = function $this$removeFavoriteColor$($color$$) {
    console.info($color$$.userColorId);
    return!$color$$ || !$color$$.userColorId ? !1 : this._deleteFavoriteColorById($color$$.userColorId)
  };
  this.emailProject = function $this$emailProject$($email$$, $subject$$, $optIn$$) {
    $.ajax({type:"post", headers:{"Content-Type":"text/plain"}, url:this._serviceUrl + "/emailnx/send", async:!0, data:JSON.stringify({webVisualizerShare:{to:$email$$, subject:"NextGen Visualizer Project Share", optIn:"N", html:{}, objects:{StoreVO:{storeNumber:"WEB"}, ColorVO:{colorCode1:"S-G-340", colorCode2:"440C-3", colorCode3:"540C-1", colorCode4:"640E-1", colorCode5:"PPU6-11", colorCode6:"750E-3", colorCode7:"140C-1", colorCode8:"240F-7"}}, image1:{restURI:"render?roomId=1002&surfaceId1=1&color1=540C-1&surfaceId2=2&color2=440C-3&surfaceId3=3&color3=750E-3&surfaceId4=&color4=&surfaceId5=&color5=&surfaceId6=6&color6=640E-1&surfaceId7=7&color7=S-G-340&surfaceId8=8&color8=240F-7&surfaceId9=&color9=&surfaceId10=&color10="}}}), 
    success:function($response$$) {
      console.info("sucess", $response$$)
    }, error:function($xhr$$) {
      console.info("fail", $xhr$$)
    }})
  };
  this.saveProject = function $this$saveProject$() {
    var $obj$$ = this, $data$$ = this._getProjectJson();
    $data$$.projectId = null;
    var $data$$ = {NextGenProjectVO:$data$$}, $es$$ = {};
    $es$$.id = this.projectId;
    this.dispatchEvent(UserSession.ON_SAVE_BEGIN, $es$$);
    $.ajax({type:"post", headers:{"Content-Type":"text/plain"}, url:this._serviceUrl + "/project/nextgen/saveproject", async:!0, data:JSON.stringify($data$$), success:function($e$$64_response$$) {
      $obj$$.projectId = $e$$64_response$$.NextGenProjectVO.projectId;
      $e$$64_response$$ = {};
      $e$$64_response$$.id = $obj$$.projectId;
      $obj$$.dispatchEvent(UserSession.ON_SAVE_COMPLETE, $e$$64_response$$)
    }, error:function($xhr$$) {
      console.info("Failed");
      e = {};
      e.type = UserSession.ERR_TYPE_SAVE;
      e.message = "Failed to save project.";
      $obj$$.dispatchEvent(UserSession.ON_ERROR, e)
    }})
  };
  this.saveAnonymousProject = function $this$saveAnonymousProject$() {
    var $prjdata$$ = this._getProjectJson(), $projectId$$ = $prjdata$$.projectId = null;
    $.ajax({type:"post", headers:{"Content-Type":"text/plain"}, url:this._serviceUrl + "/project/nextgen/anonymousproject", async:!1, data:JSON.stringify({NextGenProjectVO:$prjdata$$}), success:function($response$$) {
      $projectId$$ = $response$$.NextGenProjectVO.projectId
    }, error:function($xhr$$) {
    }});
    return $projectId$$
  };
  this.deleteProject = function $this$deleteProject$($projectId$$) {
    var $obj$$ = this;
    $.ajax({type:"delete", headers:{"Content-Type":"application/json"}, url:this._serviceUrl + "/project/nextgen/deleteproject?projectid=" + $projectId$$, data:"application/json", async:!0, success:function($e$$65_response$$) {
      $obj$$.projectId == $projectId$$ && ($obj$$.projectId = null, $obj$$.checkAutosave());
      $e$$65_response$$ = {};
      $e$$65_response$$.projectId = $projectId$$;
      $obj$$.dispatchEvent(UserSession.ON_DELETE, $e$$65_response$$)
    }, error:function($xhr$$) {
      alert("An error occurred and we have failed to delete your project.  Sorry!")
    }})
  };
  this.updateProject = function $this$updateProject$() {
    var $obj$$ = this, $data$$ = {NextGenProjectVO:{created:"", jsonData:{NextGenProjectVO:this._getProjectJson()}, modified:"", projectId:this.projectId, userId:this.userId}}, $es$$ = {};
    $es$$.id = this.projectId;
    this.dispatchEvent(UserSession.ON_UPDATE_BEGIN, $es$$);
    $.ajax({type:"put", accept:"application/json", headers:{Accept:"application/json", "Content-Type":"text/plain"}, url:this._serviceUrl + "/project/nextgen/updateproject", async:!0, data:JSON.stringify($data$$), success:function($e$$66_response$$) {
      $e$$66_response$$ = {};
      $e$$66_response$$.id = $obj$$.projectId;
      $obj$$.dispatchEvent(UserSession.ON_UPDATE_COMPLETE, $e$$66_response$$)
    }, error:function($xhr$$) {
      console.info("Failed", $xhr$$);
      e = {};
      e.type = UserSession.ERR_TYPE_UPDATE;
      e.message = "Failed to save project.";
      $obj$$.dispatchEvent(UserSession.ON_ERROR, e)
    }})
  };
  this.saveFavoriteColors = function $this$saveFavoriteColors$() {
    $.ajax({type:"post", accept:"application/json", headers:{Accept:"application/json", "Content-Type":"application/json"}, dataType:"json", url:this._serviceUrl + "/usercolor/nextgen/addusercolor", async:!0, data:JSON.stringify({AddUserColorsVO:{colors:["PPU7-12", "PPU11-8"], userId:this.userId}}), success:function($response$$) {
      alert(JSON.stringify($response$$))
    }, error:function($xhr$$) {
      alert("Error!  Status = " + $xhr$$.status + " Message = " + $xhr$$.statusText)
    }})
  };
  this.loadProject = function $this$loadProject$($id$$) {
    var $obj$$ = this;
    $.getJSON(this._serviceUrl + "/project/nextgen/getproject?projectid=" + $id$$, function($json$$) {
      console.info(JSON.stringify(eval("(" + $json$$.NextGenProjectVO.jsonData + ")").NextGenProjectVO))
    }).success(function($json$$) {
      $obj$$.load(eval("(" + $json$$.NextGenProjectVO.jsonData + ")").NextGenProjectVO, $id$$);
      return!0
    }).error(function() {
      console.info("Failed to reach service")
    });
    return!1
  };
  this.getAllProjects = function $this$getAllProjects$() {
    var $obj$$ = this;
    this.userId && ($obj$$.projectsList = [], $.getJSON(this._serviceUrl + "/project/nextgen/getallprojects?userid=" + this.userId, function($json$$) {
    }).success(function($e$$67_json$$) {
      if(!$e$$67_json$$.status) {
        if($e$$67_json$$.list["com.behr.colorsmart4.project.service.NextGenProjectVO"]) {
          var $p$$ = $e$$67_json$$.list["com.behr.colorsmart4.project.service.NextGenProjectVO"];
          $p$$ instanceof Array || ($p$$ = [$p$$]);
          for(var $i$$ = 0;$i$$ < $p$$.length;$i$$++) {
            var $project_projectId$$ = eval("(" + $p$$[$i$$].jsonData + ")").NextGenProjectVO;
            $project_projectId$$.projectId = $p$$[$i$$].projectId;
            $obj$$.projectsList.push($project_projectId$$)
          }
        }
        if($e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"]) {
          for($p$$ = 0;$p$$ < $e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"].length;$p$$++) {
            if($e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$] instanceof Object) {
              console.info($e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$]);
              var $project_projectId$$ = $e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].projectId, $projectName$$ = $e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].projectName, $userId$$ = $e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].userId, $palette$$ = $e$$67_json$$.list["com.behr.colorsmart4.project.service.ProjectVO"][$p$$].palette, $colors$$ = [], $i$$ = !1;
              if($palette$$) {
                var $paletteVO$$ = $palette$$.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
                $paletteVO$$ instanceof Array || ($paletteVO$$ = [$paletteVO$$]);
                for(var $rawcolors$$ = [], $i$$ = 0;$i$$ < $paletteVO$$.length;$i$$++) {
                  $rawcolors$$[$paletteVO$$[$i$$].order] = $paletteVO$$[$i$$].colorId
                }
                for($i$$ = 0;$i$$ < $rawcolors$$.length;$i$$++) {
                  $rawcolors$$[$i$$] && colorLookup[$rawcolors$$[$i$$]] && $colors$$.push($rawcolors$$[$i$$])
                }
                $i$$ = 0 == $palette$$.paletteType
              }
              $palette$$ = $obj$$.getBlankProjectJson();
              $palette$$.userId = $userId$$;
              $palette$$.projectId = $project_projectId$$;
              $palette$$.projectName = $projectName$$;
              $palette$$.palette = $colors$$;
              $palette$$.paletteIndex = 0;
              $palette$$.paletteQuad = $i$$;
              $palette$$.currentRoomId = null;
              $palette$$.rooms = null;
              $obj$$.projectsList.push($palette$$)
            }
          }
        }
      }
      $e$$67_json$$ = {};
      $e$$67_json$$.projectsList = $obj$$.projectsList;
      $obj$$.dispatchEvent(UserSession.ON_PROJECTS_LIST_LOADED, $e$$67_json$$)
    }).error(function() {
      $obj$$.projectsList = [];
      e = {};
      e.type = UserSession.ERR_TYPE_PROJECTS_LIST;
      e.message = "Failed to load projects list.";
      $obj$$.dispatchEvent(UserSession.ON_ERROR, e)
    }))
  };
  this._init()
}
UserSession.ON_LOAD = "load";
UserSession.ON_SAVED_COLOR_ADDED = "favoritecoloradded";
UserSession.ON_SAVED_COLOR_REMOVED = "favoritecolorremoved";
UserSession.ON_PALETTE_UPDATED = "paletteUpdated";
UserSession.ON_BINDINGS_UPDATED = "bindingsupdated";
UserSession.ON_PROJECT_NAME_UPDATED = "projectnameupdated";
UserSession.ON_PROJECTS_LIST_LOADED = "projectslistloaded";
UserSession.ON_ERROR = "error";
UserSession.ON_DELETE = "delete";
UserSession.ON_UPDATE_COMPLETE = "updatecomplete";
UserSession.ON_UPDATE_BEGIN = "updatebegin";
UserSession.ON_SAVE_BEGIN = "savebegin";
UserSession.ON_SAVE_COMPLETE = "savecomplete";
UserSession.ON_LOGIN = "login";
UserSession.ON_CART_ADD_SUCCESS = "cartaddsuccess";
UserSession.ON_CART_ADD_FAIL = "cartaddfail";
UserSession.ERR_TYPE_PROJECTS_LIST = 0;
UserSession.ERR_TYPE_UPDATE = 1;
UserSession.ERR_TYPE_SAVE = 2;
UserSession.ERR_TYPE_LOGIN = 3;
UserSession.AUTO_SAVE_DELAY = 350;
function Visualizer($display$$, $params$$0$$) {
  this.display = $display$$;
  this.mode = Visualizer.MODE_COLORS;
  this.suggestedPalettesTab = this.roomPicker = this.colorPicker = this.room = this.palette = this.colorBrowser = null;
  this.targetPaletteIndex = -1;
  this.isExterior = !1;
  this.roomTemplates = {};
  this.roomTemplateCategories = [];
  this.roomTemplatesById = [];
  this.currentRoom = null;
  this.activeIndex = this.activeCategory = -1;
  this.fastSwitch = !1;
  this.firstVisit = !0;
  this.setMode = function $this$setMode$($mode$$, $immediate$$) {
    if(this.mode !== $mode$$) {
      var $obj$$ = this, $x$$ = 0, $a$$ = "", $r$$ = "";
      switch($mode$$) {
        case Visualizer.MODE_COLORS:
          helpManager.removeHelp(".tsh_firstPaint", !0, !0);
          $a$$ = "_colorMode";
          $r$$ = "_paintMode";
          this.palette.isQuad && this.palette.transitionQuad();
          this.palette.setPreviewColor();
          break;
        case Visualizer.MODE_PAINT:
          $a$$ = "_paintMode";
          $r$$ = "_colorMode";
          $x$$ = -726;
          this.fastSwitch = !1;
          this.palette.previewQuad ? this.applyQuadPaletteColors(this.room.paletteBindings, this.palette.previewQuad) : this.palette.previewColor instanceof ColorDef && 0 == this.palette.numColors() && this.palette.setColor(this.palette.previewColor);
          !userSession._roomSelected && this.firstVisit ? (this.showRoomPicker(), this.roomPicker.bind(RoomPicker.OnClose, function($e$$) {
            $obj$$.roomPicker.unbind(RoomPicker.OnClose);
            setTimeout(function() {
              helpManager.showHelp($(".help.tsh_firstPaint"))
            }, 400)
          })) : setTimeout(function() {
            helpManager.showHelp($(".help.tsh_firstPaint"))
          }, 400);
          break;
        default:
          console.info("unknown mode");
          return
      }
      this.mode = $mode$$;
      var $modes$$ = this.display.find(".modes");
      $modes$$.animate({left:$x$$}, 250, "easeOutQuad");
      $modes$$.removeClass($r$$);
      $modes$$.addClass($a$$);
      this.firstVisit = !1
    }
  };
  this.load = function $this$load$($json$$) {
    var $categoryToShow$$ = 0, $roomToShow$$ = 0, $g$$;
    for($g$$ in $json$$) {
      var $group_ordered$$ = $json$$[$g$$], $i$$ = $group_ordered$$.visualizerRooms;
      if(!(0 >= $i$$.length)) {
        var $groupName$$ = $group_ordered$$.groupName, $isExterior$$1_t$$ = $group_ordered$$.isExterior;
        -1 == $.inArray($groupName$$, this.roomTemplateCategories) && (this.roomTemplateCategories[$group_ordered$$.order - 1] = $groupName$$);
        this.roomTemplates[$groupName$$] = [];
        1 == $group_ordered$$.order && ($categoryToShow$$ = $groupName$$);
        for(var $r$$ = 0;$r$$ < $i$$.length;$r$$++) {
          var $overlay$$1_template$$ = $i$$[$r$$].shadowMap, $base$$ = $i$$[$r$$].baseImg;
          "null" == $base$$ && ($base$$ = null);
          var $thumb$$ = $i$$[$r$$].thumbNail, $id$$ = $i$$[$r$$].roomId, $surfaces$$ = [], $compareBase$$ = $i$$[$r$$].compareBase, $compareShadow$$ = $i$$[$r$$].compareShadow, $comparePaintable$$ = $i$$[$r$$].comparePaintable, $shadowX$$ = $i$$[$r$$].shadowX, $shadowY$$ = $i$$[$r$$].shadowY;
          1 == $i$$[$r$$].order && 1 == $group_ordered$$.order && ($roomToShow$$ = $r$$);
          for(var $offsets$$ = [], $areas$$ = [], $highlights$$ = [], $bindings$$ = [], $surfaces$$ = $i$$[$r$$].visualizerSurfaces, $v$$ = 0;$v$$ < $surfaces$$.length;$v$$++) {
            var $surface$$ = $surfaces$$[$v$$];
            $areas$$[$v$$] = $surface$$.paintableAreaImage;
            $highlights$$[$v$$] = $surface$$.overlayImage;
            $bindings$$[$v$$] = -1;
            $offsets$$[2 * $v$$] = $surface$$.x;
            $offsets$$[2 * $v$$ + 1] = $surface$$.y
          }
          $overlay$$1_template$$ = new RoomTemplate($id$$, $groupName$$, $overlay$$1_template$$, $base$$, $areas$$, $highlights$$, $offsets$$, $bindings$$, $thumb$$, $isExterior$$1_t$$, $surfaces$$, $compareBase$$, $compareShadow$$, $comparePaintable$$, $shadowX$$, $shadowY$$);
          this.roomTemplates[$groupName$$][$i$$[$r$$].order - 1] = $overlay$$1_template$$;
          this.roomTemplatesById[$id$$] = $overlay$$1_template$$
        }
        $group_ordered$$ = [];
        for($i$$ = 0;$i$$ < this.roomTemplates[$groupName$$].length;$i$$++) {
          ($isExterior$$1_t$$ = this.roomTemplates[$groupName$$][$i$$]) && ($group_ordered$$[$group_ordered$$.length] = $isExterior$$1_t$$)
        }
        this.roomTemplates[$groupName$$] = $group_ordered$$
      }
    }
    this.showRoom($categoryToShow$$, $roomToShow$$)
  };
  this.setUserRoomBindings = function $this$setUserRoomBindings$($userBindings$$) {
    console.info($userBindings$$);
    for(var $i$$ = 0;$i$$ < this.roomTemplatesById.length;$i$$++) {
      var $o$$ = this.roomTemplatesById[$i$$];
      if($o$$) {
        if($userBindings$$[$o$$.id]) {
          console.info("Loading room:", $o$$.id, $o$$.bindings);
          for(var $b$$ = 0;$b$$ < $o$$.bindings.length;$b$$++) {
            $o$$.bindings[$b$$] = $userBindings$$.length <= $b$$ ? $userBindings$$[$b$$] : -1
          }
        }else {
          for($b$$ = 0;$b$$ < $o$$.bindings.length;$b$$++) {
            $o$$.bindings[$b$$] = -1
          }
        }
      }
    }
  };
  this.loadUserBindings = function $this$loadUserBindings$($userBindings$$) {
    if($userBindings$$) {
      var $byid$$ = [], $i$$;
      for($i$$ in this.roomTemplates) {
        var $current_group$$ = this.roomTemplates[$i$$], $t$$;
        for($t$$ in $current_group$$) {
          $byid$$[$current_group$$[$t$$].id] = $current_group$$[$t$$];
          for(var $bs_template$$ = $current_group$$[$t$$].bindings, $b$$ = 0;$b$$ < $bs_template$$.length;$b$$++) {
            $bs_template$$[$b$$] = -1
          }
        }
      }
      $current_group$$ = this.roomTemplates[this.activeCategory][this.activeIndex];
      for($i$$ in $userBindings$$) {
        if($t$$ = $userBindings$$[$i$$], ($bs_template$$ = $byid$$[$i$$]) && $t$$) {
          $bs_template$$.bindings = $t$$
        }
      }
      console.info("Load User bindings");
      this.room.setBindings($current_group$$.bindings)
    }
  };
  this.showRoomById = function $this$showRoomById$($id$$, $undoredoflag$$) {
    this.roomTemplatesById[$id$$] && this._showRoom(this.roomTemplatesById[$id$$], $undoredoflag$$)
  };
  this.showRoom = function $this$showRoom$($templateName$$, $index$$, $undoredoflag$$) {
    if(!($templateName$$ == this.activeCategory && $index$$ == this.activeIndex)) {
      var $template$$ = null;
      -1 != $.inArray($templateName$$, this.roomTemplateCategories) && ($template$$ = this.roomTemplates[$templateName$$][$index$$], this._showRoom($template$$, $undoredoflag$$))
    }
  };
  this._showRoom = function $this$_showRoom$($template$$, $undoredoflag$$) {
    if($template$$) {
      var $category$$ = $template$$.category, $index$$ = $.inArray($template$$, this.roomTemplates[$category$$]);
      console.info("Showing room");
      -1 != this.activeCategory && (oldTemplate = this.roomTemplates[this.activeCategory][this.activeIndex], oldTemplate.roomData = this.room.paletteBindings, undoRedoStack.register(this, this._showRoom, [oldTemplate], $undoredoflag$$));
      this.activeCategory = $category$$;
      this.activeIndex = $index$$;
      this.palette.setRoomMessageType("exterior" === $category$$.toLowerCase() ? "exterior" : "interior");
      this.isExterior = this.roomTemplates[$category$$][$index$$].isExterior ? !0 : !1;
      this.currentRoom = $template$$;
      this.room.loadRoom($template$$, $template$$.bindings);
      this.palette.loadPreviewRoom($template$$);
      userSession && userSession.setCurrentRoomId($template$$.id);
      colorCompare.loadRoom($template$$.compareShadow, $template$$.compareBase, $template$$.comparePaintable)
    }
  };
  this.showRoomPicker = function $this$showRoomPicker$() {
    roomPicker.showThumbs(this.activeCategory, this.palette.getColor(0));
    showModal(this.roomPicker)
  };
  this.showPalette = function $this$showPalette$() {
    this.display.find(".paletteArea .initial").hide();
    this.display.find(".paletteArea .post").show();
    var $co$$ = this.display.find(".colorOptions");
    $co$$.find(".list").show();
    $co$$.find(".initialText").hide();
    this.showCoordinatedText()
  };
  this.showCoordinatedText = function $this$showCoordinatedText$() {
    var $m$$ = this.display.find(".message");
    $m$$.find("div").hide();
    3 > this.palette.numColors() || this.palette.isQuad ? null != this.palette.previewQuad || this.palette.isQuad ? $m$$.find(".morePaletteText").show() : $m$$.find(".paletteText").show() : $m$$.find(".colorsText").show()
  };
  this.attachColorPicker = function $this$attachColorPicker$($colorPicker$$) {
    this.colorPicker = $colorPicker$$
  };
  this.attachModifyColor = function $this$attachModifyColor$($modifyColor$$) {
    var $obj$$ = this;
    this.modifyColor = $modifyColor$$;
    this.modifyColor.bind("onColorConfirm", function($e$$) {
      console.info("test");
      $obj$$.palette.setColor($e$$.color, $obj$$.palette.selectedTab)
    })
  };
  this.attachRoomPicker = function $this$attachRoomPicker$($picker$$) {
    this.roomPicker = $picker$$;
    this.roomPicker.bind(RoomPicker.OnRoomSelect, function showRoom($e$$) {
      $obj$$.showRoom($e$$.templateName, $e$$.index);
      hideModal($obj$$.roomPicker)
    });
    var $obj$$ = this
  };
  this.applyQuadPaletteColors = function $this$applyQuadPaletteColors$($bindings$$, $colors$$) {
    this.room.suspendPainting = !0;
    this._applyBindingsAndColors($bindings$$, $colors$$, !0);
    this.room.suspendPainting = !1;
    this.room.paint()
  };
  this.displaySimilarColors = function $this$displaySimilarColors$() {
    $display$$.find(".colorOptions .list .items").animate({top:-72}, 200, "linear")
  };
  this.displayQuadPalettes = function $this$displayQuadPalettes$() {
    $display$$.find(".colorOptions .list .items").animate({top:0}, 200, "linear")
  };
  this.initOverlayControls = function $this$initOverlayControls$() {
    var $obj$$ = this, $overlay$$ = this.display;
    this.thumbsOverlay = $overlay$$.find(".thumbs");
    $overlay$$.find(".unpaint").on("click", function($e$$) {
      -1 == $obj$$.room.selectedArea && $obj$$.room.isPainted() ? $obj$$.room.clearPaletteBindings() : $obj$$.room.isAreaPainted($obj$$.room.selectedArea) && $obj$$.room.clearSelectedPaletteBinding()
    });
    $overlay$$.find(".undo").on("click", function($e$$) {
      undoRedoStack.undo()
    });
    $overlay$$.find(".redo").on("click", function($e$$) {
      undoRedoStack.redo()
    });
    $overlay$$.find(".pick").on("click", function($e$$) {
      $obj$$.showRoomPicker()
    })
  };
  this.initPaintRoom = function $this$initPaintRoom$() {
    var $obj$$ = this, $unpaintButton$$ = this.display.find(".canvasOverlay .unpaint"), $room$$ = loadModuleDisplay("PaintRoom");
    this.display.find(".canvas").append($room$$);
    this.room = new PaintRoom($room$$);
    this.room.showLoader = !0;
    this.room.bind(PaintRoom.ON_AREA_CLICK, function($e$$) {
      $obj$$.palette.hasSelectedTab() ? ($obj$$.room.paintSectionByIndex($obj$$.palette.getSelectedColor(), $e$$.area), $obj$$.room.updateBinding($e$$.area, $obj$$.palette.selectedTab), helpManager.removeHelp(".tsh_firstPaint")) : $obj$$.room.toggleSelectedArea($e$$.area)
    });
    this.room.bind(PaintRoom.ON_PAINT, function($e$$) {
      $obj$$.room.isPainted() ? $unpaintButton$$.removeClass("inactive") : $unpaintButton$$.addClass("inactive");
      window.navigator && 0 < window.navigator.userAgent.indexOf("534.30") && ($obj$$.room.display.css("opacity", "0.99"), setTimeout(function() {
        $obj$$.room.display.css("opacity", "1")
      }, 5))
    });
    this.room.bind(PaintRoom.ON_BINDINGS_UPDATED, function($e$$) {
      userSession.setBindings($obj$$.roomTemplates[$obj$$.activeCategory][$obj$$.activeIndex].id, $e$$.bindings)
    });
    this.room.bind(PaintRoom.ON_ITEM_DROP, function($e$$) {
      helpManager.removeHelp(".tsh_firstPaint")
    });
    this.room.bind(PaintRoom.ON_EXTERNAL_ITEM_DROP, function($e$$) {
      var $i$$64_index$$;
      if(-1 === ($i$$64_index$$ = $obj$$.palette.indexOf($e$$.item))) {
        helpManager.removeHelp(".tsh_firstPaint");
        var $b$$23_colors$$, $bindings$$;
        if(8 > $obj$$.palette.numColors()) {
          $b$$23_colors$$ = $obj$$.room.paletteBindings;
          $bindings$$ = [];
          for($i$$64_index$$ = 0;$i$$64_index$$ < $b$$23_colors$$.length;$i$$64_index$$++) {
            $bindings$$[$i$$64_index$$] = $b$$23_colors$$[$i$$64_index$$] == $e$$.index ? -1 : $b$$23_colors$$[$i$$64_index$$] >= $e$$.index ? $b$$23_colors$$[$i$$64_index$$] - 1 : $b$$23_colors$$[$i$$64_index$$]
          }
          $b$$23_colors$$ = [];
          for($i$$64_index$$ = 0;$i$$64_index$$ < $obj$$.palette.numColors();$i$$64_index$$++) {
            var $color$$ = $obj$$.palette.getColor($i$$64_index$$);
            $color$$ !== $e$$.color && $b$$23_colors$$.push($color$$)
          }
        }
        $i$$64_index$$ = $obj$$.palette.addColor($e$$.item, UndoRedoStack.IGNORE);
        if(void 0 != $i$$64_index$$) {
          var $helper$$ = $($e$$.ui.helper).clone();
          $("#colorsmart").append($helper$$);
          var $co$$ = colorsmart.offset(), $color$$ = $(".Visualizer .RowPalette .colorTab")[$i$$64_index$$], $o$$ = $($color$$).offset(), $color$$ = $helper$$.offset();
          $helper$$.offset({top:$color$$.top - $co$$.top, left:$color$$.left - $co$$.left});
          setTimeout(function() {
            $helper$$.animate({left:$o$$.left - $co$$.left, top:$o$$.top - $co$$.top, opacity:0.25}, {duration:450, easting:"easeInQuad", complete:function() {
              console.info("completed", $helper$$);
              $helper$$.remove()
            }})
          }, 50);
          $obj$$.room.updateBinding($e$$.surfaceIndex, $i$$64_index$$, UndoRedoStack.IGNORE);
          undoRedoStack.register($obj$$, $obj$$._applyBindingsAndColors, [$bindings$$, $b$$23_colors$$, $obj$$.palette.isQuad])
        }
      }else {
        $obj$$.room.updateBinding($e$$.surfaceIndex, $i$$64_index$$), helpManager.removeHelp(".tsh_firstPaint")
      }
    });
    $(document).on("mousemove", function($e$$) {
      if($obj$$.mode === Visualizer.MODE_PAINT && !currentModal && dragOp.dragging && (dragOp.data.type === DragType.UserPalette || dragOp.data.type === DragType.ColorSearch)) {
        var $o$$ = $room$$.offset();
        $e$$.pageX > $o$$.left && ($e$$.pageY > $o$$.top && $e$$.pageX < $o$$.left + $room$$.outerWidth() && $e$$.pageY < $o$$.top + $room$$.outerHeight()) && $obj$$.room.selectArea($e$$.pageX - $o$$.left, $e$$.pageY - $o$$.top)
      }
    })
  };
  this._applyBindingsAndColors = function $this$_applyBindingsAndColors$($bindings$$, $colors$$, $isQuad$$, $undoredoflag$$) {
    for(var $currentBindings$$ = [], $currentColors$$ = [], $i$$ = 0;$i$$ < this.room.paletteBindings.length;$i$$++) {
      $currentBindings$$[$i$$] = this.room.paletteBindings[$i$$]
    }
    for($i$$ = 0;$i$$ < this.palette.paletteSize();$i$$++) {
      $currentColors$$[$i$$] = this.palette.getColor($i$$)
    }
    undoRedoStack.register(this, this._applyBindingsAndColors, [$currentBindings$$, $currentColors$$, this.palette.isQuad], $undoredoflag$$);
    this.room.setBindings($bindings$$, UndoRedoStack.IGNORE);
    $isQuad$$ ? this.palette.setQuad($colors$$, UndoRedoStack.IGNORE) : this.palette.setColors($colors$$, UndoRedoStack.IGNORE)
  };
  this.initPalette = function $this$initPalette$() {
    var $palette$$ = loadModuleDisplay("RowPalette");
    this.display.find(".palette").append($palette$$);
    this.palette = new RowPalette($palette$$)
  };
  this.initQuadPalette = function $this$initQuadPalette$() {
    var $obj$$ = this, $quadPalette$$ = loadModuleDisplay("QuadPalette");
    this.display.find(".paletteCombos").append($quadPalette$$);
    this.quadPalette = new QuadPalette($quadPalette$$);
    this.quadPalette.bind("onSwatchClick", function($dest$$1_e$$81_ho$$1_ui$$) {
      var $colors$$ = $dest$$1_e$$81_ho$$1_ui$$.colors;
      if($obj$$.mode === Visualizer.MODE_COLORS) {
        $obj$$.palette.setPreviewQuad($dest$$1_e$$81_ho$$1_ui$$.colors)
      }else {
        $obj$$.quadPalette.isUpdating = !0;
        var $oi$$ = [null, null, null], $ni$$ = [0, 1, 2];
        quadPaletteColorsChanged = 3;
        for(var $i$$ = 0;3 > $i$$;$i$$++) {
          if($oi$$[$i$$] = $obj$$.palette.indexOf($colors$$[$i$$]), -1 == $oi$$[$i$$] || $oi$$[$i$$] == $i$$) {
            $oi$$[$i$$] = null, $ni$$[$i$$] = null, $oi$$[$i$$] == $i$$ && quadPaletteColorsChanged--
          }
        }
        $colors$$[4] = $colors$$[5] = $colors$$[6] = $colors$$[7] = null;
        for(var $newBindings$$ = [], $i$$ = 0;$i$$ < $obj$$.room.paletteBindings.length;$i$$++) {
          for(var $set$$ = !1, $a$$ = 0;3 > $a$$;$a$$++) {
            var $oldArea$$ = $oi$$[$a$$], $newArea$$ = $ni$$[$a$$];
            $obj$$.room.paletteBindings[$i$$] == $oldArea$$ && ($newBindings$$[$i$$] = $newArea$$, $set$$ = !0);
            $newBindings$$[$i$$] = $oldArea$$
          }
          $set$$ || ($newBindings$$[$i$$] = $obj$$.room.paletteBindings[$i$$])
        }
        $obj$$.applyQuadPaletteColors($newBindings$$, $colors$$);
        $obj$$.quadPalette.isUpdating = !1;
        $dest$$1_e$$81_ho$$1_ui$$ = $($dest$$1_e$$81_ho$$1_ui$$.ui);
        var $helper$$ = $dest$$1_e$$81_ho$$1_ui$$.clone(), $o$$ = $dest$$1_e$$81_ho$$1_ui$$.offset();
        $helper$$.css("position", "absolute");
        $helper$$.css("left", $o$$.left);
        $helper$$.css("top", $o$$.top);
        $("#colorsmart").append($helper$$);
        $dest$$1_e$$81_ho$$1_ui$$ = $(".Visualizer .RowPalette .tabs .color1");
        var $o$$ = $($dest$$1_e$$81_ho$$1_ui$$).offset(), $co$$ = colorsmart.offset();
        $dest$$1_e$$81_ho$$1_ui$$ = $helper$$.offset();
        $helper$$.offset({top:$dest$$1_e$$81_ho$$1_ui$$.top - $co$$.top, left:$dest$$1_e$$81_ho$$1_ui$$.left - $co$$.left});
        setTimeout(function() {
          $helper$$.animate({left:$o$$.left + 50 - $co$$.left, top:$o$$.top + 60 - $co$$.top, opacity:0.25}, {duration:450, easting:"easeInQuad", complete:function() {
            $helper$$.remove()
          }})
        }, 50)
      }
    })
  };
  this.initColors = function $this$initColors$($params$$) {
    this.colorBrowser = new ColorBrowser($params$$);
    this.display.find(".colorMode").append(this.colorBrowser.display);
    var $obj$$ = this;
    this.colorBrowser.bind(ColorBrowser.ON_COLOR_CLICK, function($e$$) {
      if(0 === $obj$$.palette.numColors()) {
        null == $obj$$.palette.previewColor && null == $obj$$.palette.previewQuad && $obj$$.showPalette();
        if($e$$.roomType && "string" === typeof $e$$.roomType && !userSession._roomSelected) {
          switch($e$$.roomType.toLowerCase()) {
            case "marquee":
            ;
            case "exterior":
              $obj$$.showRoom("Exterior", 0);
              break;
            case "bedroom":
            ;
            case "kids room":
              $obj$$.showRoom("Bedroom", 0);
              break;
            case "bathroom":
              $obj$$.showRoom("Bathroom", 0);
              break;
            case "dining":
              $obj$$.showRoom("Dining", 0);
              break;
            case "living room":
              $obj$$.showRoom("Living", 0);
              break;
            case "kitchen":
              $obj$$.showRoom("Kitchen", 0);
              break;
            case "office":
              $obj$$.showRoom("Other", 0)
          }
        }else {
          !0 === $e$$.color.marquee && $obj$$.showRoom("Exterior", 0)
        }
        $obj$$.palette.setPreviewColor($e$$.color)
      }else {
        $obj$$.palette.addColor($e$$.color), $obj$$.fastSwitch && (window.location.hash = "paint", $obj$$.fastSwitch = !1)
      }
    })
  };
  this.updateSimilarColors = function $this$updateSimilarColors$() {
    var $cs$$ = [], $selectedColor$$ = this.palette.getSelectedColor();
    $cs$$.push($selectedColor$$);
    for(var $colors$$ = this.palette.paletteData.colors, $i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      var $c$$ = $colors$$[$i$$];
      $c$$ && $c$$ != $selectedColor$$ && $cs$$.push($c$$)
    }
    this.singlePalette.refreshColorSet($cs$$)
  };
  this.init = function $this$init$($params$$) {
    var $obj$$ = this;
    $(window).on("hashchange", function($e$$) {
      switch(window.location.hash) {
        case "#paint":
          $obj$$.setMode(Visualizer.MODE_PAINT);
          break;
        default:
          $obj$$.setMode(Visualizer.MODE_COLORS)
      }
    });
    this.display.find(".tsh_compare").removeClass("help");
    this.display.find(".btnVisualize").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      window.location.hash = "paint"
    });
    this.display.find(".btnExplore").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      window.location.hash = "colors"
    });
    var $saveUsed$$;
    this.btnSave = this.display.find(".btnSave");
    this.btnSaveAs = this.display.find(".btnSaveAs");
    if(userSession) {
      userSession.bind(UserSession.ON_SAVE_COMPLETE, function($e$$) {
        $saveCompleteDisplay$$()
      });
      userSession.bind(UserSession.ON_UPDATE_COMPLETE, function($e$$) {
        $saveCompleteDisplay$$()
      });
      userSession.bind(UserSession.ON_SAVE_BEGIN, function($e$$) {
        $saveBeginDisplay$$()
      });
      userSession.bind(UserSession.ON_UPDATE_BEGIN, function($e$$) {
        $saveBeginDisplay$$()
      });
      var $saveCompleteDisplay$$ = function $$saveCompleteDisplay$$$() {
        "save" === $saveUsed$$ ? $obj$$.btnSave.text("Saved!") : $obj$$.btnSaveAs.text("Saved!");
        setTimeout($clearDisplay$$, 5E3, $saveUsed$$)
      }, $saveBeginDisplay$$ = function $$saveBeginDisplay$$$() {
        "save" === $saveUsed$$ ? $obj$$.btnSave.text("Saving...") : $obj$$.btnSaveAs.text("Saving...")
      }, $clearDisplay$$ = function $$clearDisplay$$$($d$$) {
        "save" === $d$$ ? $obj$$.btnSave.text("Save") : $obj$$.btnSaveAs.text("Save As")
      }
    }
    this.btnPrint = this.display.find(".btnPrint");
    this.btnPrint.on("click", function() {
      printUnsavedProject()
    });
    this.btnSave.on("click", function() {
      $saveUsed$$ = "save";
      trySaveProject()
    });
    this.btnSaveAs.on("click", function() {
      $saveUsed$$ = "saveAs";
      loginIntercept(saveProject)
    });
    this.display.find(".myProjects").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      showMyProjects()
    });
    this.display.find(".newProject").on("click", function() {
      $(window).scrollTop(colorsmart.offset().top);
      showStartOver()
    });
    var $replaceColor$$ = addModuleToModal("ReplaceColor");
    this.display.find(".note").on("click", function() {
      showModal(renameProject)
    });
    userSession && (userSession.bind(UserSession.ON_PROJECT_NAME_UPDATED, function($e$$) {
      $obj$$.display.find(".projectName").text($e$$.name)
    }), this.display.find(".projectName").text(userSession.projectName));
    var $mod$$ = loadModuleDisplay("RoomVisualizer");
    $obj$$.display.find(".container").html($mod$$);
    this.initOverlayControls();
    this.initPaintRoom();
    this.initPalette();
    this.initQuadPalette();
    this.initColors($params$$);
    $params$$ = loadModuleDisplay("SinglePalette");
    this.display.find(".similarColors").append($params$$);
    this.singlePalette = new SinglePalette($params$$);
    this.singlePalette.bind("onSwatchClick", function($c$$25_e$$) {
      $c$$25_e$$ = $c$$25_e$$.color;
      $obj$$.palette.hasColor($c$$25_e$$) || (8 > $obj$$.palette.numColors() ? ($obj$$.palette.addColor($c$$25_e$$), $obj$$.palette.isQuad ? $obj$$.quadPalette.generateColors([$obj$$.palette.paletteData.colors[0]]) : $obj$$.quadPalette.generateColors($obj$$.palette.paletteData.colors)) : 8 == $obj$$.palette.numColors() && showModal($replaceColor$$))
    });
    this.palette.bind("onPaletteFull", function($e$$) {
      showModal($replaceColor$$)
    });
    this.palette.bind("onSelectChange", function($e$$) {
      $obj$$.updateSimilarColors()
    });
    this.palette.bind("onRemove", function($e$$) {
      for(var $b$$24_colors$$ = $obj$$.room.paletteBindings, $bindings$$ = [], $i$$ = 0;$i$$ < $b$$24_colors$$.length;$i$$++) {
        $bindings$$[$i$$] = $b$$24_colors$$[$i$$] == $e$$.index ? -1 : $b$$24_colors$$[$i$$] >= $e$$.index ? $b$$24_colors$$[$i$$] - 1 : $b$$24_colors$$[$i$$]
      }
      $b$$24_colors$$ = [];
      for($i$$ = 0;$i$$ < $obj$$.palette.numColors();$i$$++) {
        var $color$$ = $obj$$.palette.getColor($i$$);
        $color$$ !== $e$$.color && $b$$24_colors$$.push($color$$)
      }
      $obj$$._applyBindingsAndColors($bindings$$, $b$$24_colors$$, !1);
      $obj$$.palette.setPreviewColor($e$$.color)
    });
    this.palette.bind("onColorsUpdated", function($e$$) {
      $obj$$.onColorsUpdatedHandler()
    });
    this.palette.bind("onPreviewUpdated", function($e$$) {
      $obj$$.onPreviewUpdatedHandler($e$$.color)
    });
    this.palette.bind("onTabClick", function($e$$) {
      null == $e$$.color && ($obj$$.fastSwitch = !0, window.location.hash = "colors")
    });
    this.palette.bind("onDetails", function($e$$) {
      var $link$$ = "";
      if($e$$.colors) {
        for(var $i$$ = 0;$i$$ < $e$$.colors.length;$i$$++) {
          "" != $link$$ && ($link$$ += ","), $link$$ += $e$$.colors[$i$$].id
        }
        $link$$ = "PaletteDetailView/" + $link$$
      }else {
        $link$$ = "ColorDetailView/" + $e$$.color.id
      }
      window.location.href = "/consumer/" + $link$$
    });
    this.palette.bind("onSave", function($e$$) {
      userSession.isLoggedIn() || (document.cookie = "mybehr_colorid=" + ($e$$.color ? $e$$.color.id : $e$$.colors[0].id) + "; path=/");
      loginIntercept(function() {
        if(userSession) {
          if($e$$.colors) {
            for(var $i$$ = 0;$i$$ < $e$$.colors.length;$i$$++) {
              $e$$.colors[$i$$] && userSession.addFavoriteColor($e$$.colors[$i$$])
            }
          }else {
            $e$$.color && userSession.addFavoriteColor($e$$.color)
          }
        }
      })
    });
    this.btnBuy = this.display.find(".buy");
    this.btnBuy.on("click", function($buttonText_e$$) {
      $buttonText_e$$ = $($obj$$.btnBuy[0]).text();
      "Buy Samples" === $buttonText_e$$ ? userSession && ($obj$$.btnBuy.text("Adding..."), setTimeout(function() {
        console.info($obj$$.palette.previewQuad);
        $obj$$.palette.previewQuad ? (console.info("In here"), userSession.addToCart($obj$$.palette.previewQuad)) : 0 < $obj$$.palette.numColors() ? userSession.addToCart($obj$$.palette.paletteData.colors) : userSession.addToCart($obj$$.palette.previewColor)
      }, 25)) : "View Cart" === $buttonText_e$$ && (window.location.href = "/consumer/shopping-cart")
    });
    userSession.bind(UserSession.ON_CART_ADD_SUCCESS, function($e$$99_n$$) {
      $obj$$.btnBuy.text("View Cart");
      $e$$99_n$$ = $obj$$.palette.paletteData.colors;
      for(var $s$$ = "", $i$$ = 0;$i$$ < $e$$99_n$$.length;$i$$++) {
        "" != $s$$ && ($s$$ += ","), null != $e$$99_n$$[$i$$] && ($s$$ += $e$$99_n$$[$i$$].id)
      }
      setCookie("vcpstatus", $s$$)
    });
    userSession.bind(UserSession.ON_CART_ADD_FAIL, function($e$$) {
      $obj$$.btnBuy.text("Buy Samples")
    });
    this.display.find(".compare").on("click", function($e$$) {
      1 < userSession.palette.numColors() ? (showModal(colorCompare), colorCompare.setPalette($obj$$.palette.paletteData.colors)) : null != $obj$$.palette.previewQuad && (showModal(colorCompare), colorCompare.setPalette($obj$$.palette.previewQuad))
    });
    this.display.find(".btnAddColor").on("click", function($e$$) {
      showColorPickerForSlot(0)
    });
    this.display.find(".suggestedPalettesTab").on("click", function() {
      $obj$$.displayQuadPalettes()
    });
    this.display.find(".suggestedColorsTab").on("click", function() {
      $obj$$.displaySimilarColors()
    });
    $("body").on("mousedown touchstart", function($e$$) {
      if(-1 < $obj$$.room.selectedArea) {
        $e$$ = $($e$$.target).parents();
        for(var $i$$ = 0;$i$$ < $e$$.length;$i$$++) {
          var $p$$ = $e$$[$i$$];
          if($p$$ === $obj$$.room.display[0] || $p$$ === $obj$$.palette.display[0]) {
            return
          }
        }
        $obj$$.room.clearSelectedArea()
      }
    });
    $(".facebookShare").click(function() {
      shareMyBehrProject("facebook")
    });
    $(".twitterShare").click(function() {
      shareMyBehrProject("twitter")
    });
    $(".pinterestShare").click(function() {
      shareMyBehrProject("pinterest")
    });
    $(".emailShare").click(function() {
      shareMyBehrProject("email")
    })
  };
  this.setPalette = function $this$setPalette$($palette$$) {
    this.palette.setPalette($palette$$);
    this.room.bindPalette(this.palette.paletteData, this.room.paletteBindings);
    visualizerInitFlag = !1
  };
  this.onPreviewUpdatedHandler = function $this$onPreviewUpdatedHandler$($color$$) {
    0 === this.palette.numColors() && this.quadPalette.generateColors([$color$$]);
    this.palette.previewQuad ? this.display.find(".compareContainer").show() : this.display.find(".compareContainer").hide();
    this.showCoordinatedText();
    this.btnBuy.text("Buy Samples")
  };
  this.onColorsUpdatedHandler = function $this$onColorsUpdatedHandler$() {
    var $nc$$ = this.palette.numColors();
    0 === $nc$$ && (window.location.hash = "colors");
    3 > $nc$$ || this.palette.isQuad ? (this.palette.isQuad || this.quadPalette.generateColors(this.palette.paletteData.colors), this.displayQuadPalettes()) : (this.updateSimilarColors(), this.displaySimilarColors());
    this.showPalette();
    this.showCoordinatedText();
    this.palette.setSelectedTab();
    2 > $nc$$ ? this.display.find(".compareContainer").hide() : this.display.find(".compareContainer").show();
    this.btnBuy.text("Buy Samples")
  };
  this.init($params$$0$$)
}
Visualizer.NAME = "Visualizer";
Visualizer.MODE_COLORS = "colors";
Visualizer.MODE_PAINT = "vis";
function RoomPicker($display$$) {
  this.display = $display$$;
  this.roomTemplates = {};
  this.roomTemplateCategories = [];
  this.currentRoom = null;
  this.activeIndex = this.activeCategory = 1;
  this.lastColor = this.thumbsOverlay = null;
  EventDispatcher.enableEvents(this, RoomPicker.OnRoomSelect, RoomPicker.OnClose);
  this.load = function $this$load$($json$$) {
    this.thumbsOverlay = this.display.find(".thumbs");
    for(var $g$$ in $json$$) {
      var $group$$2_r$$11_t$$ = $json$$[$g$$], $ordered$$1_rooms$$ = $group$$2_r$$11_t$$.visualizerRooms;
      if(!(0 >= $ordered$$1_rooms$$.length)) {
        var $groupName$$ = $group$$2_r$$11_t$$.groupName, $i$$73_isExterior$$ = $group$$2_r$$11_t$$.isExterior;
        -1 == $.inArray($groupName$$, this.roomTemplateCategories) && (this.roomTemplateCategories[$group$$2_r$$11_t$$.order - 1] = $groupName$$);
        this.roomTemplates[$groupName$$] = [];
        for($group$$2_r$$11_t$$ = 0;$group$$2_r$$11_t$$ < $ordered$$1_rooms$$.length;$group$$2_r$$11_t$$++) {
          var $overlay$$3_template$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].shadowMap, $base$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].baseImg;
          "null" == $base$$ && ($base$$ = null);
          for(var $thumb$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].thumbNail, $id$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].roomId, $surfaces$$ = [], $compareBase$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].compareBase, $compareShadow$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].compareShadow, $comparePaintable$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].comparePaintable, $shadowX$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].shadowX, $shadowY$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].shadowY, 
          $offsets$$ = [], $areas$$ = [], $highlights$$ = [], $bindings$$ = [], $surfaces$$ = $ordered$$1_rooms$$[$group$$2_r$$11_t$$].visualizerSurfaces, $v$$ = 0;$v$$ < $surfaces$$.length;$v$$++) {
            var $surface$$ = $surfaces$$[$v$$];
            $areas$$[$v$$] = $surface$$.paintableAreaImage;
            $highlights$$[$v$$] = $surface$$.overlayImage;
            $bindings$$[$v$$] = -1;
            $offsets$$[2 * $v$$] = $surface$$.x;
            $offsets$$[2 * $v$$ + 1] = $surface$$.y
          }
          $overlay$$3_template$$ = new RoomTemplate($id$$, $groupName$$, $overlay$$3_template$$, $base$$, $areas$$, $highlights$$, $offsets$$, $bindings$$, $thumb$$, $i$$73_isExterior$$, $surfaces$$, $compareBase$$, $compareShadow$$, $comparePaintable$$, $shadowX$$, $shadowY$$);
          this.roomTemplates[$groupName$$][$ordered$$1_rooms$$[$group$$2_r$$11_t$$].order - 1] = $overlay$$3_template$$
        }
        $ordered$$1_rooms$$ = [];
        for($i$$73_isExterior$$ = 0;$i$$73_isExterior$$ < this.roomTemplates[$groupName$$].length;$i$$73_isExterior$$++) {
          ($group$$2_r$$11_t$$ = this.roomTemplates[$groupName$$][$i$$73_isExterior$$]) && ($ordered$$1_rooms$$[$ordered$$1_rooms$$.length] = $group$$2_r$$11_t$$)
        }
        this.roomTemplates[$groupName$$] = $ordered$$1_rooms$$
      }
    }
    $ordered$$1_rooms$$ = [];
    for($i$$73_isExterior$$ = 0;$i$$73_isExterior$$ < this.roomTemplateCategories.length;$i$$73_isExterior$$++) {
      ($group$$2_r$$11_t$$ = this.roomTemplateCategories[$i$$73_isExterior$$]) && ($ordered$$1_rooms$$[$ordered$$1_rooms$$.length] = $group$$2_r$$11_t$$)
    }
    this.roomTemplateCategories = $ordered$$1_rooms$$;
    this.updateUI()
  };
  this.updateUI = function $this$updateUI$() {
    var $obj$$ = this, $categoryIndex_types$$ = this.display.find(".types");
    $categoryIndex_types$$.html("");
    for(var $i$$ = 0;$i$$ < this.roomTemplateCategories.length;$i$$++) {
      var $categoryName$$ = this.roomTemplateCategories[$i$$], $node$$ = $("<div class='type'><span>" + $categoryName$$ + "</span></div>");
      $categoryIndex_types$$.append($node$$);
      $node$$.on("click", function($ei$$) {
        return function($e$$) {
          $obj$$.handleCategoryClick($ei$$, !0)
        }
      }($categoryName$$))
    }
    $categoryIndex_types$$.append("<div class='arrow'></div>");
    $categoryIndex_types$$ = $.inArray(this.activeCategory, this.roomTemplateCategories);
    this.highlightCategoryButton($categoryIndex_types$$)
  };
  this.handleCategoryClick = function $this$handleCategoryClick$($clickedCategory$$) {
    this.showThumbs($clickedCategory$$)
  };
  this.showRoom = function $this$showRoom$($a$$, $b$$) {
    var $e$$ = {};
    $e$$.templateName = $a$$;
    $e$$.index = $b$$;
    this.dispatchEvent(RoomPicker.OnRoomSelect, $e$$)
  };
  this.highlightCategoryButton = function $this$highlightCategoryButton$($button_categoryIndex$$) {
    this.display.find(".arrow").css("left", 104 * $button_categoryIndex$$ + 42);
    var $buttons$$ = $display$$.find(".types .type");
    $button_categoryIndex$$ = $($buttons$$[$button_categoryIndex$$]);
    $buttons$$.removeClass("active");
    $button_categoryIndex$$.addClass("active")
  };
  this.showThumbs = function $this$showThumbs$($category$$, $color$$) {
    $color$$ || ($color$$ = this.lastColor);
    this.lastColor = $color$$;
    var $obj$$ = this, $categoryIndex$$2_i$$ = $.inArray($category$$, this.roomTemplateCategories), $templates$$ = this.roomTemplates[$category$$];
    this.display.find(".indexer");
    this.highlightCategoryButton($categoryIndex$$2_i$$);
    this.thumbsOverlay.html("");
    for($categoryIndex$$2_i$$ = 0;$categoryIndex$$2_i$$ < $templates$$.length;$categoryIndex$$2_i$$++) {
      var $template$$ = $templates$$[$categoryIndex$$2_i$$];
      (function() {
        $("<div></div>");
        var $room$$3_t$$ = loadModuleDisplay("PaintRoom");
        $obj$$.thumbsOverlay.append($room$$3_t$$);
        var $previewRoom$$ = new PaintRoom($room$$3_t$$, !0, 173, 127);
        $previewRoom$$.palette = new Palette;
        $room$$3_t$$ = new RoomTemplate("-1", "", $template$$.compareShadow, $template$$.compareBase, [$template$$.comparePaintable], [$template$$.comparePaintable], [0, 0], [0], null, !1, null, null, null, null, null, null);
        $previewRoom$$.onready = function $$previewRoom$$$onready$() {
          $previewRoom$$.paintSectionByIndex($color$$, 0)
        };
        $previewRoom$$.loadRoom($room$$3_t$$, null)
      })()
    }
    this.thumbsOverlay.find("div").on("click", function() {
      var $thumb$$ = $(this);
      $obj$$.showRoom($category$$, $thumb$$.index())
    })
  };
  this.hide = function $this$hide$() {
    Modal.prototype.hide.call(this);
    console.info("Dispatching close event");
    this.dispatchEvent(RoomPicker.OnClose, {})
  };
  this.init = function $this$init$() {
    this.display.find(".close").on("click", function() {
      hideModal()
    })
  };
  this.init()
}
RoomPicker.OnRoomSelect = "onRoomSelect";
RoomPicker.OnClose = "close";
RoomPicker.prototype = new Modal;
function ColorBrowser($params$$0$$) {
  this.tabCarat = this.tabs = this.display = null;
  EventDispatcher.enableEvents(this, ColorBrowser.ON_COLOR_CLICK);
  this.family = {browser:null, colorSelector:null, swatchSelector:null, colorCycle:"Red Orange Yellow Green Blue Purple".split(" "), colorCycleDoNotTranslate:"Red Orange Yellow Green Blue Purple".split(" "), upButton:null, downButton:null, currentColor:0, currentIndex:0, isColorCycle:!0, selectColor:function $this$family$selectColor$($i$$, $index$$, $skipAnimation$$) {
    this.colorSelector.css("top", 52 * $i$$ + 6 + "px");
    this.colorSelector.find(".rep").css("background-image", $(this.display.find(".color .rep")[$i$$]).css("background-image"));
    this.populateChipsets($i$$, $index$$, $skipAnimation$$)
  }, selectChipset:function $this$family$selectChipset$($i$$) {
    var $cs$$ = this.display.find(".chipsets > .chipset");
    "first" === $i$$ ? $i$$ = 0 : "last" === $i$$ && ($i$$ = $cs$$.length - 1);
    this.swatchSelector.css("top", 46 * $i$$ + 1 + "px");
    this.swatchSelector.fadeIn(300);
    $cs$$ = $($cs$$[$i$$]);
    this.populateChips($cs$$);
    this.currentIndex = $i$$;
    this.swatchSelector.html($cs$$.clone())
  }, up:function $this$family$up$() {
    this.display.find(".chipsets > .chipset");
    var $i$$ = this.currentIndex;
    0 == $i$$ ? this.isColorCycle ? this.selectColor(0 == this.currentColor ? 5 : this.currentColor - 1, "last", !0) : this.selectChipset("last") : this.selectChipset(--$i$$)
  }, down:function $this$family$down$() {
    var $cs$$ = this.display.find(".chipsets > .chipset"), $i$$ = this.currentIndex;
    $i$$ >= $cs$$.length - 1 ? this.isColorCycle ? this.selectColor(5 == this.currentColor ? 0 : this.currentColor + 1, "first", !0) : this.selectChipset("first") : this.selectChipset(++$i$$)
  }, populateChips:function $this$family$populateChips$($chipset_s$$) {
    var $obj$$ = this, $chips$$ = this.display.find(".chips");
    $chips$$.html("");
    $chipset_s$$ = $chipset_s$$.clone();
    $chips$$.append($chipset_s$$);
    $chipset_s$$ = $chipset_s$$.find(".swatch");
    $chipset_s$$.on("mouseover", function($e$$) {
      t = $(this);
      showTooltip(t.find(".name").text(), t.find(".id").text(), t)
    });
    $chipset_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chipset_s$$.on("click", function($color$$44_e$$) {
      $color$$44_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$44_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chipset_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    })
  }, _getColor:function $this$family$_getColor$($index$$) {
    for(;8 < $index$$;) {
      $index$$ -= 9
    }
    for(;0 > $index$$;) {
      $index$$ += 9
    }
    switch($index$$) {
      case 0:
        return"Red";
      case 1:
        return"Orange";
      case 2:
        return"Yellow";
      case 3:
        return"Green";
      case 4:
        return"Blue";
      case 5:
        return"Purple";
      case 6:
        return"Brown";
      case 7:
        return"Gray";
      case 8:
        return"White"
    }
  }, _getColorIndex:function $this$family$_getColorIndex$($color$$) {
    if("string" !== typeof $color$$) {
      return-1
    }
    switch($color$$.toLowerCase()) {
      case "red":
        return 0;
      case "orange":
        return 1;
      case "yellow":
        return 2;
      case "green":
        return 3;
      case "blue":
        return 4;
      case "purple":
        return 5;
      case "brown":
        return 6;
      case "gray":
        return 7;
      case "white":
        return 9;
      default:
        return-1
    }
  }, populateChipsets:function $this$family$populateChipsets$($color$$, $index$$0$$, $disableAnimation$$) {
    function $delayedRenderChipset$$($group$$, $index$$, $selected$$, $c$$) {
      setTimeout(function() {
        $renderChipset$$($group$$, $index$$, $selected$$, $c$$)
      }, 80 * $index$$)
    }
    function $renderChipset$$($group$$, $index$$, $selected$$, $c$$27_chipset$$) {
      if($obj$$.currentColor == $c$$27_chipset$$) {
        $c$$27_chipset$$ = $("<div class='chipset'><table><tr><td></td></tr></table></div>");
        for(var $td$$ = $c$$27_chipset$$.find("td"), $r$$ = 0;$r$$ < $group$$.length;$r$$++) {
          var $swatches$$ = $group$$[$r$$].split(","), $numColors$$ = 0, $tr$$ = $("<div></div>");
          $td$$.append($tr$$);
          for(var $s$$ = 0;$s$$ < $swatches$$.length;$s$$++) {
            var $color$$48_swatch$$ = colorLookup[$swatches$$[$s$$].trim()];
            $color$$48_swatch$$ && ($numColors$$++, $color$$48_swatch$$ = $("<div class='swatch' style='background-color:" + $color$$48_swatch$$.rgb + "'><div class='id'>" + $color$$48_swatch$$.id + "</div><div class='name'>" + $color$$48_swatch$$.name + "</div></div>"), $tr$$.append($color$$48_swatch$$))
          }
          $tr$$.append($("<div class='clear'></div>"))
        }
        $c$$27_chipset$$.on("mouseup", function($e$$111_set$$) {
          $e$$111_set$$ = $($e$$111_set$$.target);
          $e$$111_set$$.hasClass("chipset") || ($e$$111_set$$ = $e$$111_set$$.closest(".chipset"));
          $obj$$.selectChipset($e$$111_set$$.index() - 1)
        });
        $chipsets$$.append($c$$27_chipset$$);
        $selected$$ && $obj$$.selectChipset($index$$)
      }
    }
    var $obj$$ = this, $st$$ = this._getColor($color$$);
    if(6 > $color$$) {
      var $bottom$$1_i$$ = 5 < $color$$ + 1 ? this.colorCycle[0] : this.colorCycle[$color$$ + 1], $bottomImg_fam_numSwatches$$ = 5 < $color$$ + 1 ? this.colorCycleDoNotTranslate[0] : this.colorCycleDoNotTranslate[$color$$ + 1];
      this.upButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + (0 > $color$$ - 1 ? this.colorCycleDoNotTranslate[5] : this.colorCycleDoNotTranslate[$color$$ - 1]) + "_up.png'/> <span>" + (0 > $color$$ - 1 ? this.colorCycle[5] : this.colorCycle[$color$$ - 1]) + "</span>");
      this.downButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $bottomImg_fam_numSwatches$$ + "_down.png'/> <span>" + $bottom$$1_i$$ + "</span>");
      this.isColorCycle = !0
    }else {
      this.upButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $st$$ + "_up.png'/> <span>Cool</span>"), this.downButton.html("<span>More</span> <img src='" + IMAGE_ROOT + "/cma/vz/vis/" + $st$$ + "_down.png'/><span>Warm</span>"), this.isColorCycle = !1
    }
    this.currentColor = $color$$;
    $bottomImg_fam_numSwatches$$ = 9;
    $disableAnimation$$ || this.swatchSelector.hide();
    for($bottom$$1_i$$ = 0;$bottom$$1_i$$ < _families.length;$bottom$$1_i$$++) {
      if($bottomImg_fam_numSwatches$$ = _families[$bottom$$1_i$$], $bottomImg_fam_numSwatches$$.name == $st$$) {
        var $chipsets$$ = this.display.find(".chipsets");
        $chipsets$$.html("");
        $chipsets$$.append(this.swatchSelector);
        var $groups$$ = $bottomImg_fam_numSwatches$$.groups, $bottomImg_fam_numSwatches$$ = $groups$$.length;
        void 0 === $index$$0$$ ? $index$$0$$ = parseInt($bottomImg_fam_numSwatches$$ / 2 - 0.5) : "first" === $index$$0$$ ? $index$$0$$ = 0 : "last" === $index$$0$$ && ($index$$0$$ = $bottomImg_fam_numSwatches$$ - 1);
        for(var $g$$ = 0;$g$$ < $bottomImg_fam_numSwatches$$;$g$$++) {
          var $group$$0$$ = $groups$$[$g$$];
          $disableAnimation$$ ? $renderChipset$$($group$$0$$, $g$$, $g$$ == $index$$0$$, $color$$) : $delayedRenderChipset$$($group$$0$$, $g$$, $g$$ == $index$$0$$, $color$$)
        }
      }
    }
  }, init:function $this$family$init$($parent$$, $params$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    var $fam$$ = this.display = $parent$$.display.find(".family");
    this.colorSelector = $fam$$.find(".colors .selected");
    this.swatchSelector = $fam$$.find(".chipsets .selected");
    this.upButton = this.display.find(".up .button span");
    this.downButton = this.display.find(".down .button span");
    $obj$$ = this;
    $fam$$.find(".color .rep").on("click", function($e$$) {
      $e$$ = $($e$$.target).parent();
      $obj$$.selectColor($e$$.index())
    });
    this.upButton.on("click", function($e$$) {
      $obj$$.up()
    });
    this.downButton.on("click", function($e$$) {
      $obj$$.down()
    });
    var $defaultColor$$ = 0;
    $params$$ && $params$$.family && ($defaultColor$$ = this._getColorIndex($params$$.family), 0 > $defaultColor$$ && ($defaultColor$$ = 0));
    setTimeout(function() {
      $obj$$.selectColor($defaultColor$$)
    }, 10)
  }};
  this.decorator = {browser:null, display:null, swatchSelector:null, section:null, selectChipset:function $this$decorator$selectChipset$($i$$) {
    var $cs$$6_csi$$ = this.display.find(".chipset");
    $cs$$6_csi$$.removeClass("active");
    $cs$$6_csi$$ = $($cs$$6_csi$$[$i$$]);
    $cs$$6_csi$$.addClass("active");
    this.swatchSelector.css("top", 94 * $i$$ + 1 + "px");
    this.populateChips($(this.display.find(".chipsets .chipset")[$i$$]));
    this.swatchSelector.html($cs$$6_csi$$.clone())
  }, populateChips:function $this$decorator$populateChips$($chipset$$) {
    var $obj$$ = this, $chips$$1_s$$ = this.display.find(".chips");
    $chips$$1_s$$.html("");
    $chipset$$ = $chipset$$.clone();
    $chips$$1_s$$.append($chipset$$);
    var $bg$$ = $chipset$$.find(".bg").text();
    $chips$$1_s$$.css("background-image", "url(" + $bg$$ + ")");
    $chips$$1_s$$ = $chipset$$.find(".swatch");
    $chips$$1_s$$.on("click", function($color$$49_e$$) {
      $color$$49_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$49_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chips$$1_s$$.on("mouseover", function($e$$116_t$$) {
      $e$$116_t$$ = $(this);
      showTooltip($e$$116_t$$.find(".name").text(), $e$$116_t$$.find(".id").text(), $e$$116_t$$)
    });
    $chips$$1_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chips$$1_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    });
    $chipset$$.find("span").remove()
  }, populateChipsets:function $this$decorator$populateChipsets$($chipsets$$) {
    var $obj$$ = this;
    $chipsets$$ = this.display.find(".chipsets");
    $chipsets$$.html("");
    for(var $i$$ = 0;$i$$ < _decorators.length;$i$$++) {
      var $chips$$2_dec$$ = _decorators[$i$$], $bg$$1_s$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$2_dec$$.bg, $title$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$2_dec$$.title, $chips$$2_dec$$ = $chips$$2_dec$$.group.split(","), $chipset$$ = $("<div class='chipset'></div>");
      $chipset$$.append("<div class='bg'>" + $bg$$1_s$$ + "</div>");
      for($bg$$1_s$$ = 0;$bg$$1_s$$ < $chips$$2_dec$$.length;$bg$$1_s$$++) {
        var $c$$28_swatch$$ = $chips$$2_dec$$[$bg$$1_s$$].trim(), $color$$ = colorLookup["HDC-" + $c$$28_swatch$$];
        $color$$ || ($color$$ = colorLookup[$c$$28_swatch$$]);
        $color$$ && ($c$$28_swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$.id + "</div><div class='name'>" + $color$$.name + "</div></div>"), $c$$28_swatch$$.css("background-color", $color$$.rgb), $chipset$$.append($c$$28_swatch$$))
      }
      $chipset$$.append("<img src='" + $title$$ + "'/>");
      $chipset$$.on("mouseup", function($e$$119_set$$) {
        $e$$119_set$$ = $($e$$119_set$$.target);
        $e$$119_set$$.hasClass("chipset") || ($e$$119_set$$ = $e$$119_set$$.parent());
        $obj$$.selectChipset($e$$119_set$$.index())
      });
      $chipsets$$.append($chipset$$)
    }
    $chipsets$$.append(this.swatchSelector)
  }, populateChipsets:function $this$decorator$populateChipsets$($list$$2_region$$) {
    var $obj$$ = this, $columns_title$$ = this.display.find(".columns"), $chipsets$$ = this.display.find(".chipsets");
    $chipsets$$.html("");
    for(var $chips$$3_classes$$3_dec$$ = $columns_title$$.attr("class").split(/\s+/), $i$$ = 0;$i$$ < $chips$$3_classes$$3_dec$$.length;$i$$++) {
      "columns" != $chips$$3_classes$$3_dec$$[$i$$] && $columns_title$$.removeClass($chips$$3_classes$$3_dec$$[$i$$])
    }
    $columns_title$$.addClass($list$$2_region$$);
    $list$$2_region$$ = _decorators[$list$$2_region$$];
    for($i$$ = 0;$i$$ < $list$$2_region$$.length;$i$$++) {
      var $chips$$3_classes$$3_dec$$ = $list$$2_region$$[$i$$], $bg$$2_s$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$3_classes$$3_dec$$.bg, $columns_title$$ = IMAGE_ROOT + "/cma/vz/vis/" + $chips$$3_classes$$3_dec$$.title, $chips$$3_classes$$3_dec$$ = $chips$$3_classes$$3_dec$$.group.split(","), $chipset$$ = $("<div class='chipset'></div>");
      $chipset$$.append("<div class='bg'>" + $bg$$2_s$$ + "</div>");
      for($bg$$2_s$$ = 0;$bg$$2_s$$ < $chips$$3_classes$$3_dec$$.length;$bg$$2_s$$++) {
        var $c$$29_swatch$$ = $chips$$3_classes$$3_dec$$[$bg$$2_s$$].trim(), $color$$ = colorLookup["HDC-" + $c$$29_swatch$$];
        $color$$ || ($color$$ = colorLookup[$c$$29_swatch$$]);
        $color$$ ? ($c$$29_swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$.id + "</div><div class='name'>" + $color$$.name + "</div></div>"), $c$$29_swatch$$.css("background-color", $color$$.rgb), $chipset$$.append($c$$29_swatch$$)) : console.info("missing: " + $chips$$3_classes$$3_dec$$[$bg$$2_s$$])
      }
      $chipset$$.append("<img src='" + $columns_title$$ + "'/>");
      $chipset$$.on("mouseup", function($e$$120_set$$) {
        $e$$120_set$$ = $($e$$120_set$$.target);
        $e$$120_set$$.hasClass("chipset") || ($e$$120_set$$ = $e$$120_set$$.parent());
        $obj$$.selectChipset($e$$120_set$$.index())
      });
      $chipsets$$.append($chipset$$)
    }
    $chipsets$$.append(this.swatchSelector)
  }, init:function $this$decorator$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".decorator");
    this.swatchSelector = this.display.find(".chipsets .selected");
    this.populateChipsets("fallwinter");
    this.selectChipset(0);
    var $rads$$ = this.display.find(".set");
    $rads$$.on("change", function() {
      $obj$$.section = $rads$$[0].checked ? "fallwinter" : "home";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0)
    })
  }};
  this.popular = {browser:null, display:null, swatchSelector:null, section:null, selectChipset:function $this$popular$selectChipset$($i$$) {
    var $cs$$7_csi$$ = this.display.find(".chipset");
    $cs$$7_csi$$.removeClass("active");
    $cs$$7_csi$$ = $($cs$$7_csi$$[$i$$]);
    $cs$$7_csi$$.addClass("active");
    this.swatchSelector.css("top", ("hue" === this.section ? 52 * $i$$ + 1 : 66 * $i$$ + 16) + "px");
    this.populateChips($(this.display.find(".chipsets .chipset")[$i$$]));
    this.swatchSelector.html($cs$$7_csi$$.clone())
  }, populateChips:function $this$popular$populateChips$($chipset$$) {
    var $obj$$ = this, $chips$$4_s$$ = this.display.find(".chips");
    $chips$$4_s$$.html("");
    $chipset$$ = $chipset$$.clone();
    $chips$$4_s$$.append($chipset$$);
    var $name$$ = $chipset$$.find("span").text(), $bg$$ = $chipset$$.find(".bg").text();
    $bg$$ ? $chips$$4_s$$.css("background-image", "url(" + $bg$$ + ")") : $chips$$4_s$$.css("background-image", "");
    $chips$$4_s$$ = $chipset$$.find(".swatch");
    $chips$$4_s$$.on("click", function($color$$53_e$$) {
      $color$$53_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$53_e$$;
      $o$$.roomType = "exterior" === $obj$$.section ? "exterior" : $name$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chips$$4_s$$.on("mouseover", function($e$$122_t$$) {
      $e$$122_t$$ = $(this);
      showTooltip($e$$122_t$$.find(".name").text(), $e$$122_t$$.find(".id").text(), $e$$122_t$$)
    });
    $chips$$4_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chips$$4_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    });
    $chipset$$.find("span").remove()
  }, populateChipsets:function $this$popular$populateChipsets$($list$$3_region$$) {
    var $obj$$ = this, $columns$$1_name$$ = this.display.find(".columns"), $chipsets$$ = this.display.find(".chipsets");
    $chipsets$$.html("");
    for(var $classes$$4_title$$ = $columns$$1_name$$.attr("class").split(/\s+/), $i$$ = 0;$i$$ < $classes$$4_title$$.length;$i$$++) {
      "columns" != $classes$$4_title$$[$i$$] && $columns$$1_name$$.removeClass($classes$$4_title$$[$i$$])
    }
    $columns$$1_name$$.addClass($list$$3_region$$);
    $list$$3_region$$ = _popular[$list$$3_region$$];
    for($i$$ = 0;$i$$ < $list$$3_region$$.length;$i$$++) {
      var $chips$$5_dec$$ = $list$$3_region$$[$i$$], $columns$$1_name$$ = $chips$$5_dec$$.name, $bg$$ = $chips$$5_dec$$.bg ? IMAGE_ROOT + "/cma/vz/vis/" + $chips$$5_dec$$.bg : null, $classes$$4_title$$ = $chips$$5_dec$$.title ? IMAGE_ROOT + "/cma/vz/vis/" + $chips$$5_dec$$.title : null, $chips$$5_dec$$ = $chips$$5_dec$$.group.split(","), $chipset$$ = $("<div class='chipset'></div>");
      $bg$$ && $chipset$$.append("<div class='bg'>" + $bg$$ + "</div>");
      $bg$$ = $("<div class='chipblock'></div>");
      $chipset$$.append($bg$$);
      for(var $s$$ = 0;$s$$ < $chips$$5_dec$$.length;$s$$++) {
        var $color$$ = colorLookup[$chips$$5_dec$$[$s$$].trim()];
        if($color$$) {
          var $swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$.id + "</div><div class='name'>" + $color$$.name + "</div></div>");
          $swatch$$.css("background-color", $color$$.rgb);
          $bg$$.append($swatch$$)
        }else {
          console.info("missing: " + $chips$$5_dec$$[$s$$])
        }
      }
      $bg$$.append("<div class='clear'></div>");
      $classes$$4_title$$ ? $chipset$$.append("<img src='" + $classes$$4_title$$ + "'/>") : $chipset$$.append("<div class='clear'></div><span>" + $columns$$1_name$$ + "</span>");
      $chipset$$.on("mouseup", function($e$$125_set$$) {
        for($e$$125_set$$ = $($e$$125_set$$.target);!$e$$125_set$$.hasClass("chipset");) {
          if($e$$125_set$$ = $e$$125_set$$.parent(), !$e$$125_set$$) {
            return
          }
        }
        $obj$$.selectChipset($e$$125_set$$.index())
      });
      $chipsets$$.append($chipset$$)
    }
    $chipsets$$.append(this.swatchSelector)
  }, init:function $this$popular$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".popular");
    this.swatchSelector = this.display.find(".chipsets .selected");
    $obj$$.section = "trends2014";
    this.populateChipsets("trends2014");
    this.selectChipset(0);
    var $rads$$ = this.display.find(".set");
    $rads$$.on("change", function() {
      $obj$$.section = $rads$$[0].checked ? "trends2014" : $rads$$[1].checked ? "interior" : $rads$$[2].checked ? "exterior" : "hue";
      $obj$$.populateChipsets($obj$$.section);
      $obj$$.selectChipset(0)
    })
  }};
  this.marquee = {browser:null, display:null, populateChips:function $this$marquee$populateChips$() {
    for(var $obj$$ = this, $chips$$6_s$$ = this.display.find(".chips"), $i$$0$$ = 0;$i$$0$$ < _marquee.length;$i$$0$$++) {
      var $color$$0$$ = colorLookup[_marquee[$i$$0$$].trim()];
      $color$$0$$.marquee = !0;
      $color$$0$$.name += " &sup1;";
      if($color$$0$$) {
        var $swatch$$ = $("<div class='swatch'><div class='id'>" + $color$$0$$.id + "</div><div class='name'>" + $color$$0$$.name + "</div></div>");
        $swatch$$.css("background-color", $color$$0$$.rgb);
        $chips$$6_s$$.append($swatch$$)
      }else {
        console.info("missing: " + _marquee[$i$$0$$])
      }
    }
    $chips$$6_s$$.append("<div class='clear'></div>");
    $chips$$6_s$$ = $chips$$6_s$$.find(".swatch");
    $chips$$6_s$$.on("click", function($color$$57_e$$) {
      $color$$57_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$57_e$$;
      $o$$.roomType = "marquee";
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chips$$6_s$$.on("mouseover", function($e$$127_t$$) {
      $e$$127_t$$ = $(this);
      showTooltip($e$$127_t$$.find(".name").text(), $e$$127_t$$.find(".id").text(), $e$$127_t$$)
    });
    $chips$$6_s$$.on("mouseout", function($e$$) {
      hideTooltip()
    });
    $chips$$6_s$$.each(function($i$$, $e$$) {
      var $t$$ = $(this), $color$$ = colorLookup[$t$$.find(".id").text()], $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
      $t$$.draggable({revert:!0, revertDuration:50, distance:14, helper:"clone", scroll:!1, start:function() {
        dragOp.startDrag($data$$)
      }, stop:function() {
        dragOp.stopDrag()
      }}).data("src", $data$$)
    })
  }, init:function $this$marquee$init$($parent$$) {
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".marquee");
    this.populateChips()
  }};
  this.search = {browser:null, display:null, input:null, inputInitialized:!1, inputHelpMessage:"", chipTemplate:null, chips:null, cache:[], previousTerm:"", resultMessage:"", addChip:function $this$search$addChip$($color$$) {
    var $chip$$ = this.chipTemplate.clone(), $swatch$$ = $chip$$.find(".swatch");
    $swatch$$.css("background-color", $color$$.rgb);
    $chip$$.find(".name").html($color$$.name);
    $chip$$.find(".id").text($color$$.id);
    var $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
    $chip$$.draggable({revert:!0, revertDuration:50, distance:14, helper:function() {
      return $swatch$$.clone()
    }, scroll:!1, cursorAt:{top:22, left:22}, start:function() {
      dragOp.startDrag($data$$)
    }, stop:function() {
      dragOp.stopDrag()
    }}).data("src", $data$$);
    this.chips.append($chip$$)
  }, search:function $this$search$search$() {
    var $r$$13_term$$ = this.input.val();
    if(!(2 > $r$$13_term$$.length)) {
      var $obj$$ = this;
      this.chips.html("");
      var $searchGroup_x$$ = colorLookup;
      "" != this.previousTerm && 0 <= $r$$13_term$$.indexOf(this.previousTerm) && ($searchGroup_x$$ = this.cache);
      this.previousTerm = $r$$13_term$$;
      this.cache = $r$$13_term$$ = ColorUtilities.search($r$$13_term$$, $searchGroup_x$$);
      if(0 < $r$$13_term$$.length) {
        for($searchGroup_x$$ = 0;$searchGroup_x$$ < $r$$13_term$$.length;$searchGroup_x$$++) {
          color = $r$$13_term$$[$searchGroup_x$$], this.addChip(color)
        }
        this.display.find(".results .count").text(this.cache.length);
        this.display.find(".results .msg").text(this.resultMessage);
        this.chips.find(".chip").on("click", function($color$$60_e$$) {
          $color$$60_e$$ = colorLookup[$(this).find(".id").text()];
          var $o$$ = {};
          $o$$.color = $color$$60_e$$;
          $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
        })
      }else {
        this.showNoResultsMessage()
      }
    }
  }, showNoResultsMessage:function $this$search$showNoResultsMessage$() {
    this.display.find(".results .count").text("");
    0 < this.input.val().length && this.input.val() != this.inputHelpMessage ? this.display.find(".results .msg").text("Sorry! We are unable to find a match to your color search. Please try your search again.") : this.display.find(".results .msg").text("Search above for colors!")
  }, initInput:function $this$search$initInput$($initialize$$) {
    $initialize$$ ? this.inputInitialized || (this.input.addClass("init"), this.input.val("")) : this.inputInitialized && (this.input.removeClass("init"), this.input.val(this.inputHelpMessage));
    this.inputInitialized = $initialize$$
  }, init:function $this$search$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".search");
    this.input = this.display.find(".searchText");
    this.chips = this.display.find(".chips");
    this.chipTemplate = this.chips.find(".chip");
    this.chipTemplate.remove();
    this.inputHelpMessage = this.input.val();
    this.resultMessage = this.display.find(".results .msg").text();
    this.showNoResultsMessage();
    this.input.on("focus", function() {
      $obj$$.initInput(!0)
    });
    this.input.on("focusout", function() {
      "" == $obj$$.input.val() && ($obj$$.initInput(!1), $obj$$.showNoResultsMessage())
    });
    this.display.find(".btnSearch").on("click", function() {
      $obj$$.search()
    });
    this.input.on("change keyup", function() {
      $obj$$.search()
    })
  }};
  this.saved = {browser:null, display:null, chipTemplate:null, chips:null, emptyMessage:null, addChip:function $this$saved$addChip$($color$$) {
    this.emptyMessage.remove();
    var $chip$$ = this.chipTemplate.clone(), $swatch$$ = $chip$$.find(".swatch");
    $swatch$$.css("background-color", $color$$.rgb);
    $chip$$.find(".name").html($color$$.name);
    $chip$$.find(".id").text($color$$.id);
    this.chips.append($chip$$);
    var $obj$$ = this;
    $chip$$.on("click", function($color$$62_e$$) {
      $color$$62_e$$ = colorLookup[$(this).find(".id").text()];
      var $o$$ = {};
      $o$$.color = $color$$62_e$$;
      $obj$$.browser.dispatchEvent(ColorBrowser.ON_COLOR_CLICK, $o$$)
    });
    $chip$$.find(".close").on("click", function($e$$132_id$$15_p$$) {
      $e$$132_id$$15_p$$.stopPropagation();
      $e$$132_id$$15_p$$ = $(this).parent();
      $e$$132_id$$15_p$$.remove();
      $e$$132_id$$15_p$$ = $e$$132_id$$15_p$$.find(".id").text();
      userSession.removeFavoriteColor(colorLookup[$e$$132_id$$15_p$$]);
      0 === $obj$$.chips.find(".chip").length && $obj$$.chips.append($obj$$.emptyMessage)
    });
    var $data$$ = new DragData({color:$color$$, type:DragType.ColorSearch});
    $chip$$.draggable({revert:!0, revertDuration:50, distance:14, helper:function() {
      return $swatch$$.clone()
    }, scroll:!1, cursorAt:{top:22, left:22}, start:function() {
      dragOp.startDrag($data$$)
    }, stop:function() {
      dragOp.stopDrag()
    }}).data("src", $data$$)
  }, showColors:function $this$saved$showColors$($colors$$) {
    this.chips.html("");
    0 === $colors$$.length && this.chips.append(this.emptyMessage);
    for(var $x$$ = 0;$x$$ < $colors$$.length;$x$$++) {
      color = $colors$$[$x$$], this.addChip(color)
    }
  }, init:function $this$saved$init$($parent$$) {
    var $obj$$ = this;
    this.browser = $parent$$;
    this.display = $parent$$.display.find(".saved");
    this.emptyMessage = this.display.find(".emptyMessage");
    this.chips = this.display.find(".chips");
    this.chipTemplate = this.chips.find(".chip");
    this.chipTemplate.remove();
    userSession.bind(UserSession.ON_SAVED_COLOR_ADDED, function($e$$) {
      if($e$$.color) {
        $obj$$.addChip($e$$.color)
      }else {
        if($e$$.colors) {
          for(var $i$$ = 0;$i$$ < $e$$.colors.length;$i$$++) {
            $obj$$.addChip($e$$.colors[$i$$])
          }
        }
      }
    })
  }};
  this.selectTab = function $this$selectTab$($i$$) {
    this.tabs = this.display.find(".tabs li");
    var $groups$$1_tab$$ = $(this.tabs[$i$$]);
    this.tabs.removeClass("active");
    $groups$$1_tab$$.addClass("active");
    $groups$$1_tab$$.append(this.tabCarat);
    $groups$$1_tab$$ = this.display.find(".groups > div");
    $groups$$1_tab$$.hide();
    $($groups$$1_tab$$[$i$$]).show()
  };
  this.init = function $this$init$($params$$) {
    var $index$$ = 0, $i$$;
    for($i$$ in colorLookup) {
      $index$$++
    }
    var $obj$$ = this;
    this.display = loadModuleDisplay("ColorBrowser");
    this.tabCarat = this.display.find(".tabs .carat");
    this.display.find(".tabs li span").on("click", function($e$$134_index$$) {
      $e$$134_index$$ = $($e$$134_index$$.target).parent().index();
      $obj$$.selectTab($e$$134_index$$)
    });
    this.family.init(this, $params$$);
    this.popular.init(this);
    this.decorator.init(this);
    this.marquee.init(this);
    this.search.init(this);
    this.saved.init(this);
    if($params$$ && $params$$.section) {
      $index$$ = 0;
      switch($params$$.section.toLowerCase()) {
        case "family":
          $index$$ = 0;
          break;
        case "decorator":
          $index$$ = 1;
          break;
        case "popular":
          $index$$ = 2;
          break;
        case "marquee":
          $index$$ = 3;
          break;
        case "search":
          $index$$ = 4;
          break;
        case "saved":
          $index$$ = 5
      }
      setTimeout(function() {
        $obj$$.selectTab($index$$)
      }, 10)
    }
  };
  this.init($params$$0$$)
}
ColorBrowser.ON_COLOR_CLICK = "oncolorclick";
function ColorCompare($display$$) {
  this.display = $display$$;
  this.cols = [];
  this.compareTemplate = this.tabTemplate = null;
  this.colors = [];
  this.emptyMessage = this.palette = null;
  this.setPalette = function $this$setPalette$($colors$$) {
    function $wire$$($tab$$, $color$$, $index$$) {
      $tab$$.find(".swatch").css("background-color", $color$$.rgb);
      $tab$$.find(".text").html($color$$.name.toLowerCase() + "<br/><span>" + $color$$.id + "</span>");
      $tab$$.on("click", function($e$$) {
        $obj$$.setState($index$$, $color$$)
      });
      $tab$$.find("input").on("click", function($e$$) {
        $e$$.stopImmediatePropagation();
        $e$$.stopPropagation();
        $obj$$.setState($index$$, $color$$, !0)
      })
    }
    var $obj$$ = this;
    this.colors = $colors$$;
    this.palette.html("");
    this.clear();
    for(var $i$$ = 0;$i$$ < $colors$$.length;$i$$++) {
      var $t$$ = this.tabTemplate.clone(), $c$$ = $colors$$[$i$$];
      $c$$ && ($wire$$($t$$, $c$$, $i$$), this.palette.append($t$$), 2 > $i$$ && this.addColor($c$$))
    }
  };
  this.loadRoom = function $this$loadRoom$($shadow_t$$, $base$$4_c$$, $paintable$$) {
    $shadow_t$$ = new RoomTemplate("-1", "", $shadow_t$$, $base$$4_c$$, [$paintable$$], [$paintable$$], [0, 0], [0], null, !1, null, null, null, null, null, null);
    for($base$$4_c$$ = 0;$base$$4_c$$ < this.cols.length;$base$$4_c$$++) {
      this.cols[$base$$4_c$$].loadRoom($shadow_t$$)
    }
  };
  this.indexOf = function $this$indexOf$($color$$) {
    for(var $i$$ = 0;3 > $i$$;$i$$++) {
      if(this.cols[$i$$].color === $color$$) {
        return $i$$
      }
    }
    return-1
  };
  this.clear = function $this$clear$() {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      this.setColor($i$$, null)
    }
  };
  this.removeColor = function $this$removeColor$($color$$) {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(this.cols[$i$$].color === $color$$) {
        this.setColor($i$$, null);
        break
      }
    }
  };
  this.setState = function $this$setState$($index$$, $color$$, $suppressCheck$$) {
    var $s$$ = $(this.palette.find(".tab input")[$index$$]).attr("checked") ? !0 : !1;
    $s$$ ^ $suppressCheck$$ ? this.setColor($index$$, null, $suppressCheck$$) : this.setColor($index$$, $color$$, $suppressCheck$$)
  };
  this.setColor = function $this$setColor$($index$$, $color$$, $suppressCheck$$) {
    var $t$$ = this.cols[$index$$];
    $t$$ && ($color$$ && ($t$$.display.remove(), this.area.append($t$$.display), this.area.stop().animate({scrollTop:this.area[0].scrollHeight}, 300)), $t$$.setColor($color$$), $suppressCheck$$ || $(this.palette.find(".tab input")[$index$$]).attr("checked", $color$$ ? !0 : !1), this.isEmpty() ? this.emptyMessage.show() : this.emptyMessage.hide())
  };
  this.addColor = function $this$addColor$($color$$) {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(this.cols[$i$$].color === $color$$) {
        return!1
      }
    }
    for($i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(null == this.cols[$i$$].color) {
        return this.setColor($i$$, $color$$), !0
      }
    }
    return!1
  };
  this.isEmpty = function $this$isEmpty$() {
    for(var $i$$ = 0;$i$$ < this.cols.length;$i$$++) {
      if(null != this.cols[$i$$].color) {
        return!1
      }
    }
    return!0
  };
  this._init = function $this$_init$() {
    this.tabTemplate = this.display.find(".tab");
    this.palette = this.display.find(".palette");
    this.tabTemplate.remove();
    this.area = this.display.find(".cols");
    this.compareTemplate = this.area.find(".item");
    this.compareTemplate.hide();
    this.compareTemplate.remove();
    this.emptyMessage = this.area.find(".emptyMessage");
    for(var $i$$ = 0;8 > $i$$;$i$$++) {
      this.cols[$i$$] = this._createDisplay()
    }
    this.display.find(".close").on("click", function($e$$) {
      hideModal()
    })
  };
  this._createDisplay = function $this$_createDisplay$() {
    var $c$$ = this.compareTemplate.clone();
    this.area.append($c$$);
    $c$$.find(".remove").on("click", function($e$$) {
      console.info("Called");
      obj.compare.removeColor(obj.color)
    });
    return new ColorCompareColumn(this, $c$$)
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$)
  };
  this._init()
}
ColorCompare.NAME = "ColorCompare";
ColorCompare.prototype = new Modal;
function ColorCompareColumn($compare$$, $display$$) {
  this.compare = $compare$$;
  this.display = $display$$;
  this.color = this.room = null;
  this._init = function $this$_init$() {
    var $room$$ = loadModuleDisplay("PaintRoom"), $roomArea$$ = this.display.find(".canvas");
    this.room = new PaintRoom($room$$, !0, 310, 230);
    $roomArea$$.append($room$$);
    this.room.palette = new Palette
  };
  this.loadRoom = function $this$loadRoom$($template$$) {
    this.room.loadRoom($template$$, null)
  };
  this.setColor = function $this$setColor$($color$$) {
    this.color = $color$$;
    if(null != $color$$) {
      var $obj$$ = this;
      this.display.show();
      this.room.paintSectionByIndex($color$$, 0);
      this.display.find(".strip").css("background-color", $color$$.rgb);
      this.display.find(".colorName").html($color$$.name.toLowerCase());
      this.display.find(".colorId").text($color$$.id);
      this.display.find(".remove").on("click", function() {
        $obj$$.compare.removeColor($obj$$.color)
      })
    }else {
      this.display.hide()
    }
  };
  this._init()
}
;function StartOverAlert($display$$) {
  this.display = $display$$;
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.display.find(".close").on("click", function() {
      hideModal($obj$$)
    });
    this.display.find(".btnSaveRestart").on("click", function() {
      startOver(!0)
    });
    this.display.find(".btnRestart").on("click", function($e$$) {
      startOver(!1)
    })
  };
  this.init()
}
StartOverAlert.NAME = "StartOverAlert";
StartOverAlert.prototype = new Modal;
function RenameProject($display$$) {
  this.display = $display$$;
  this.projectName = null;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$);
    userSession && (this.projectName.focus(), this.projectName.val(userSession.projectName), (void 0 === userSession.projectId || null === userSession.projectId && "My Project" === userSession.projectName) && this.projectName.select())
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.projectName = this.display.find(".projectName");
    this.display.find(".close").on("click", function() {
      hideModal()
    });
    this.display.find(".btnOk").on("click", function() {
      userSession && userSession.setProjectName($obj$$.projectName.val());
      hideModal()
    });
    this.display.find(".btnCancel").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
RenameProject.prototype = new Modal;
RenameProject.NAME = "RenameProject";
function MyProjects($display$$) {
  this.display = $display$$;
  this.__closeTimer = this.confirmDelete = this.noProjectMessage = this.itemTemplate = this.errorMessage = this.loader = null;
  this.hide = function $this$hide$() {
    Modal.prototype.hide.call(this);
    console.info("Hiding");
    clearTimeout(this.__closeTimer);
    this.hideConfirmDelete()
  };
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$);
    this.clear();
    this.loader.show();
    userSession && userSession.userId && userSession.getAllProjects()
  };
  this.clear = function $this$clear$() {
    this.errorMessage.hide();
    this.projects.html("");
    this.projects.hide()
  };
  this.showProjectsList = function $this$showProjectsList$($list$$) {
    function $wire$$($item$$, $index$$, $data$$, $id$$) {
      $item$$.find(".btnLoad").on("click", function() {
        userSession.load($data$$, $id$$);
        hideModal()
      });
      $item$$.find(".btnDelete").on("click", function() {
        $obj$$.showConfirmDelete($id$$)
      })
    }
    var $obj$$ = this;
    this.loader.hide();
    this.projects.show();
    var $count$$ = 0;
    $list$$ instanceof Array || ($list$$ = [$list$$]);
    for(var $i$$ = 0;$i$$ < $list$$.length;$i$$++) {
      var $project$$ = $list$$[$i$$];
      if($project$$.palette) {
        var $item$$0$$ = this.itemTemplate.clone();
        $i$$ === $list$$.length - 1 && $item$$0$$.addClass("last");
        this.projects.append($item$$0$$);
        $item$$0$$.find(".title").text($project$$.projectName);
        $item$$0$$.find(".id").text($list$$[$i$$].projectId);
        for(var $palette$$ = $item$$0$$.find(".palette"), $s$$ = 0;$s$$ < $project$$.palette.length;$s$$++) {
          var $color$$ = $project$$.palette[$s$$];
          if($color$$ && ($color$$ = colorLookup[$color$$])) {
            $count$$++, $palette$$.append("<div class='swatch' style='background-color:" + $color$$.rgb + "'></div>")
          }
        }
        $wire$$($item$$0$$, $i$$, $project$$, $list$$[$i$$].projectId)
      }
    }
    0 == $count$$ ? (this.projects.append(this.noProjectMessage), this.projects.removeClass("has"), this.startCloseCountdown()) : this.projects.addClass("has")
  };
  this.startCloseCountdown = function $this$startCloseCountdown$() {
    var $obj$$ = this;
    clearTimeout(this.__closeTimer);
    this.__closeTimer = setTimeout(function() {
      hideModal($obj$$)
    }, 1E4)
  };
  this.showErrorState = function $this$showErrorState$() {
    this.loader.hide();
    this.errorMessage.show()
  };
  this.showConfirmDelete = function $this$showConfirmDelete$($id$$) {
    this.display.find(".curtain").show();
    this.confirmDelete.show($id$$)
  };
  this.hideConfirmDelete = function $this$hideConfirmDelete$() {
    this.display.find(".curtain").hide();
    this.confirmDelete.hide()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.loader = this.display.find(".loader");
    this.errorMessage = this.display.find(".errorMessage");
    this.projects = this.display.find(".projects");
    this.itemTemplate = this.projects.find(".project");
    this.noProjectMessage = this.projects.find(".noproject");
    this.itemTemplate.remove();
    this.noProjectMessage.remove();
    this.display.on("click", ".close", function() {
      hideModal($obj$$)
    });
    this.projects.bind("mousewheel DOMMouseScroll", function($e$$) {
      this.scrollTop += 30 * (0 > ($e$$.originalEvent.wheelDelta || -$e$$.originalEvent.detail) ? 1 : -1);
      $e$$.preventDefault()
    });
    var $cd$$ = loadModuleDisplay("ConfirmDelete");
    this.display.find(".confirmDelete").append($cd$$);
    this.confirmDelete = new ConfirmDelete($cd$$);
    this.confirmDelete.bind(ConfirmDelete.ON_CONFIRM, function($e$$) {
      userSession.deleteProject($e$$.id);
      $obj$$.hideConfirmDelete()
    });
    this.confirmDelete.bind(ConfirmDelete.ON_CANCEL, function() {
      $obj$$.hideConfirmDelete()
    });
    userSession && (userSession.bind(UserSession.ON_PROJECTS_LIST_LOADED, function($e$$) {
      $obj$$.showProjectsList($e$$.projectsList)
    }), userSession.bind(UserSession.ON_ERROR, function($e$$) {
      $e$$.type === UserSession.ERR_TYPE_PROJECTS_LIST && ($obj$$.showErrorState(), $obj$$.startCloseCountdown())
    }), userSession.bind(UserSession.ON_DELETE, function($e$$) {
      $obj$$.projects.find(".id:contains('" + $e$$.projectId + "')").parent().remove()
    }))
  };
  this.init()
}
MyProjects.NAME = "MyProjects";
MyProjects.prototype = new Modal;
function SaveProject($display$$) {
  this.display = $display$$;
  this.projectName = null;
  this.restartAfter = !1;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$);
    userSession && this.projectName.val(userSession.projectName)
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.projectName = this.display.find(".projectName");
    this.display.find(".close").on("click", function() {
      hideModal()
    });
    this.display.find(".btnSave").on("click", function() {
      userSession && (userSession.setProjectName($obj$$.projectName.val()), saveNewProject($obj$$.restartAfter), $obj$$.restartAfter = !1);
      hideModal()
    });
    this.display.find(".btnCancel").on("click", function($e$$) {
      hideModal()
    })
  };
  this.init()
}
SaveProject.prototype = new Modal;
SaveProject.NAME = "SaveProject";
function ConfirmDelete($display$$) {
  this.display = $display$$;
  this._deleteId = null;
  EventDispatcher.enableEvents(this, ConfirmDelete.ON_CONFIRM, ConfirmDelete.ON_CANCEL);
  this.show = function $this$show$($id$$) {
    this._deleteId = $id$$;
    this.display.show()
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.display.find(".close").on("click", function() {
      $obj$$.dispatchEvent(ConfirmDelete.ON_CANCEL, {})
    });
    this.display.find(".btnConfirm").on("click", function() {
      var $e$$ = {};
      $e$$.id = $obj$$._deleteId;
      $obj$$.dispatchEvent(ConfirmDelete.ON_CONFIRM, $e$$)
    });
    this.display.find(".btnCancel").on("click", function($e$$) {
      $obj$$.dispatchEvent(ConfirmDelete.ON_CANCEL, {})
    })
  };
  this.init()
}
ConfirmDelete.NAME = "ConfirmDelete";
ConfirmDelete.ON_CONFIRM = "confirm";
ConfirmDelete.ON_CANCEL = "cancel";
function ReplaceColor($display$$) {
  this.display = $display$$;
  this.show = function $this$show$($x$$, $y$$) {
    Modal.prototype.show.call(this, $x$$, $y$$)
  };
  this.hide = function $this$hide$() {
    this.display.hide()
  };
  this.init = function $this$init$() {
    var $obj$$ = this;
    this.display.find(".btnStartNewProject").on("click", function($e$$) {
      console.info("restart");
      $obj$$.restartProject()
    });
    this.display.find(".close").on("click", function() {
      hideModal()
    })
  };
  this.init()
}
ReplaceColor.showMenu = function $ReplaceColor$showMenu$($color$$, $x$$, $y$$) {
  this.replaceColor = addModuleToModal("Menu");
  this.replaceColor.addTitleContainer();
  this.replaceColor.addColorName($color$$.name, $color$$.id);
  this.replaceColor.addItem("Start a Project/Visualize", "startProject");
  this.replaceColor.addItem("Color Details", "details");
  showModal(this.hueCardLookup, $x$$, $y$$)
};
ReplaceColor.prototype = new Modal;
ReplaceColor.NAME = "ReplaceColor";
