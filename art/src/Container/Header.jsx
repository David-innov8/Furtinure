import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'


 class Header extends Component{    
    render(){
    const menuItems = [
        {label:"Paintings", link:"/", id:1 },
        {label:"Drawings", link:"/drawings"  , id:2},
        {label:"Sculpture", link:"/sculpture", id:3},
        {label:"Artists", link:"/Artists", id:4}
    
    ]

  return (
   <nav className='flex justify-between py-12 px-28 items-center'>
        
                <h3> {`<K.`} cultured kid</h3>
        
            
                    <ul className='flex'> 
                        {menuItems.map((item)=>(
                            <li key={item.id} className='mr-5' > 
                                 <a href={item.link} className='text-sm font-normal'>{item.label}</a>
                            </li>
                        ))}
                        <div>
                        <FontAwesomeIcon icon={faSearch} className='mr-5 cursor-pointer'/> 
                        <FontAwesomeIcon icon={faShippingFast} className='mr-5 cursor-pointer'/> 
                        </div>
                        
                    </ul>

            
        
                    </nav>
  )
}
}

export default Header