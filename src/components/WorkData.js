import ParkyProject from '../assets/parky-project.jpg'
import ParkyDemo from '../assets/parkyBook.mp4'
import ShopIumDemo from '../assets/shopIumProject.mp4'
import ShopIumProject from '../assets/shopIum1.jpg'



const ProjectData= [
    {
        sourceImg: ParkyProject ,
        video: ParkyDemo,
        title: "PARKY: PARKING PROJECT" ,
        text: "Parky is a free Android App. Simple to use, pick your parking spot with the date and hour, helps to easily remember where you parked, extend your parking time, use ParkyCoin to pay. Look and save your Parking Location and easily find your parking location.",
        source: "https://github.com/Thesis-Project-Parking-Finder/Parking-finder",
        technology: "React-Native, Figma, Firebase, CSS"

    },
    {
        sourceImg: ShopIumProject ,
        video: ShopIumDemo,
        title: "LEGACY PROJECT E-COMMERCE SHOPIUM" ,
        text: "An effective E-Commerce web site. The beautifully-designed homepage grabs visitors’ attention and immediately communicates sustainability as one of its core values. Whith Shopium you can find multiple categories of intersting products.",
        source: "https://github.com/LegacyShopIum/Legacy_Angular",
        technology: "Angular, Node Js, Express Js, MongoDb, CSS, Tailwind, " 
    },
]

export default ProjectData;