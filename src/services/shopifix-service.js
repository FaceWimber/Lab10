import st1 from "./st1.jpg"
import st2 from "./st2.jpg"
import st3 from "./st3.jpg"
import st4 from "./st4.jpg"
import st5 from "./st5.jpg"
import st6 from "./st6.jpg"
import st7 from "./st7.jpg"

export default class ShopifixService {

    getProducts() {

        let data = [
            {
                id: 1,
                name: "Grogu",
                description: "Grogu statue with size",
                price: 55000,
                curr: "USD",
                imgUrl: st1
            },
            {
                id: 2,
                name: "Rex",
                description: "Statuette Rex ",
                price: 35000,
                curr: "USD",
                imgUrl: st2
            },
            {
                id: 3,
                name: "Mandalorian",
                description: "Mandalorian statue ",
                price: 35000,
                curr: "USD",
                imgUrl: st3
            },
            {
                id: 4,
                name: "Darth Maul",
                description: "Darth Maul statue force mandalorian",
                price: 35000,
                curr: "USD",
                imgUrl: st4
            },
            {
                id: 5,
                name: "Darth Vader",
                description: "Darth Vader statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st5
            },
            {
                id: 6,
                name: "Ashoka",
                description: "Ashoka Tano statue force awakens",
                price: 35000,
                curr: "USD",
                imgUrl: st6
            },
            {
                id: 7,
                name: "Jango Fett",
                description: "The Jango Fett statue star wars episode 2",
                price: 35000,
                curr: "USD",
                imgUrl: st7
            }
            
        ]
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000 * 1.5)
        })
    }
    
}