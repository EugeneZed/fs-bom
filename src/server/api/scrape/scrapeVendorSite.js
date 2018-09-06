import McMaster from './McMaster';


export default function scrapeVendorSite(reqBody) {
  McMaster(reqBody.partNumber, reqBody.needed + reqBody.spare - reqBody.inShop)

}
