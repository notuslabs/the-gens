/* eslint-disable prettier/prettier */
function substr(address: string) {
  return address.substr(0, 5) + "...." + address.substr((address.length - 5), address.length)
}

export default substr
