import { createSlice } from "@reduxjs/toolkit"

let data = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "defaultValue":1,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://media.croma.com/image/upload/v1708672547/Croma%20Assets/Communication/Mobiles/Images/261931_0_ztucar.png",
        "images": [
            "https://t4.ftcdn.net/jpg/05/79/81/27/360_F_579812709_lXKMEeqJJ2YPGO0Z4qByDOaUonTvAuBw.jpg",
            "https://media.karousell.com/media/photos/products/2021/7/17/iphone_12_pro_1626522649_4481bf79_progressive.jpg",
            "https://3docean.img.customer.envatousercontent.com/files/468905644/590.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=03cbcf04479afd4bb056a91b23260876"
        ],
        "inCart" : false
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "defaultValue":1,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:360",
        "images": [
            "https://png.pngtree.com/png-vector/20240517/ourmid/pngtree-3d-iphone-rosario-png-image_12475778.png",
            "https://www.freeiconspng.com/thumbs/iphone-x-pictures/retro-apple-logo-iphone-x-20.png",
            "https://www.freeiconspng.com/thumbs/iphone-x-pictures/iphone-x-clipart-png-9.png"
        ],
        "inCart" : false
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "defaultValue":1,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://th.bing.com/th/id/OIP.4tZ2zpMgkLIGAvDBNeoajgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "images": [
            "https://www.pngitem.com/pimgs/m/283-2838741_samsung-galaxy-s9-plus-hd-png-download.png",
            "https://w7.pngwing.com/pngs/39/302/png-transparent-samsung-galaxy-s8-samsung-galaxy-s9-smartphone-android-s9-plus-electronics-gadget-mobile-phone.png",
            "https://e7.pngegg.com/pngimages/820/597/png-clipart-samsung-galaxy-s9-samsung-galaxy-s8-samsung-galaxy-a5-2017-samsung-galaxy-note-8-samsung-galaxy-s7-dv-gadget-mobile-phone-case-thumbnail.png"
        ],
        "inCart" : false
    },
    {
        "id": 4,
        "title": "OPPO F19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "defaultValue":1,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://th.bing.com/th/id/OIP.iSljZvfeu0Bd4UKbye5AMgHaHa?w=224&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "images": [
            "https://opsg-img-cdn-gl.heytapimg.com/epb/202207/07/Yww21BRO4Qgx6Dek.png?x-amz-process=image/format,webp/quality,Q_80",
            "https://casekaro.com/cdn/shop/products/OppoA745GSmokeCase_black_695x695_7fa4c175-4b91-4f12-aa5c-c07c22bd4068.jpg?v=1628508455&width=1445",
            "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v2/v1/assets/kvr-1920.png"
        ],
        "inCart" : false
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "defaultValue":1,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
        "images": [
            "https://atlas-content-cdn.pixelsquid.com/stock-images/huawei-p30-pro-aurora-smartphone-Xle2KJ0-600.jpg",
            "https://www.pngitem.com/pimgs/m/538-5389789_huawei-p30-lite-hd-png-download.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Bu_lmIK9KypN4P0EWyn0T9OnukEqvNrsAw&s"
        ],
        "inCart" : false
    }
  ]


const initialState = {
    allItems: data,
    cartItems : []
}


const MainSlice = createSlice({
    name: "Slicedata",
    initialState,
    writable: true,
    reducers: {

        setAllItems : (state,action) =>{
            state.allItems = [...action.payload]
        },

        addCartItems : (state,action) => {
            const res = state.allItems.filter((ele) => {
                return ele.id == action.payload
            })
            state.cartItems = [...state.cartItems,...res]
        },

        removeCartItems : (state,action) => {
            const res = state.cartItems.filter((ele)=>{
                return ele.id !== action.payload
            })
            state.cartItems = [...res]
        },

    }
})

export const { setAllItems, addCartItems, removeCartItems } = MainSlice.actions

export default MainSlice.reducer