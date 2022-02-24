const colors = require('colors')

module.exports = async function getGreekNumeric(fusionCount) {
   try {
      let greekNumeric
      switch (fusionCount) {
			case 1:
				greekNumeric = "I"
				break
			case 2:
				greekNumeric = "II"
				break
			case 3:
				greekNumeric = "III"
				break
			case 4:
				greekNumeric = "IV"
				break
			case 5:
				greekNumeric = "V"
				break
			case 6:
				greekNumeric = "VI"
				break
			case 7:
				greekNumeric = "VII"
				break
			case 8:
				greekNumeric = "VIII"
				break
			case 9:
				greekNumeric = "IX"
				break
			case 10:
				greekNumeric = "X"
				break
			case 11:
				greekNumeric = "XI"
				break
			case 12:
				greekNumeric = "XII"
				break
			case 13:
				greekNumeric = "XIII"
				break
			case 14:
				greekNumeric = "XIV"
				break
			case 15:
				greekNumeric = "XV"
				break
			case 16:
				greekNumeric = "XVI"
				break
			case 17:
				greekNumeric = "XVII"
				break
			case 18:
				greekNumeric = "XVIII"
				break
			case 19:
				greekNumeric = "XIX"
				break
			case 19:
				greekNumeric = "XX"
				break
		}
      
      return greekNumeric
   } catch (error) {
      console.error(`${error}`.red.inverse)
   }
}