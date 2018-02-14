using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Contract.Generated;
using ShoppingCart.BLL;

namespace ShoppingCart.Controllers
{
    [Route("api/[controller]")]
    public class ShoppingListController : Controller
    {

        [HttpGet("[action]")]
        public void RemoveAll()
        {
            try
            {
                ShoppingListMgr mgr = new ShoppingListMgr();
               mgr.RemoveAll();
               
            }
            catch (Exception ex)
            {

            }
          
        }


        [HttpPost("[action]")]
        public void Add([FromBody]ShoppingList item)
        {
            try
            {
                ShoppingListMgr mgr = new ShoppingListMgr();
                mgr.Create(item);
              
            }
            catch (Exception ex)
            {

            }
          
        }


        [HttpPost("[action]")]
        public void Update([FromBody]ShoppingList item)
        {
            try
            {
                ShoppingListMgr mgr = new ShoppingListMgr();
                mgr.Update(item);

            }
            catch (Exception ex)
            {

            }

        }

        [HttpPost("[action]")]
        public void Remove(int id)
        {
            try
            {
                ShoppingListMgr mgr = new ShoppingListMgr();
                mgr.Remove(id);

            }
            catch (Exception ex)
            {

            }
            
        }

        [HttpPost("[action]")]
        public IEnumerable<ShoppingList> Get(int id)
        {
            try
            {
                ShoppingListMgr mgr = new ShoppingListMgr();
                return mgr.GetAll(id);

            }
            catch (Exception ex)
            {

            }
            return null;
        }
    }
}
