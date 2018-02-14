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
    public class ProductsController : Controller
    {

        private readonly ShoppingCart.DAL.ShoppingCartEntities _context;
        public ProductsController(ShoppingCart.DAL.ShoppingCartEntities context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<Product> GetAll()
        {
            try
            {
                ProductMgr mgr = new ProductMgr(_context);
                List<Product> result = mgr.GetAll();
                //if (result != null)
                //    for (int i=0; i< result.Count; i++)
                //    {
                //        result[i].ShoppingListItem.Clear();
                //      //  result[i].ProductGroup = null;
                        
                //    }
                       

                return result;
            }
            catch (Exception ex)
            {
                List<Product> result = new List<Product>();
                Product p = new Product();
                p.Id = 1;
                p.Name = ex.ToString();
                result.Add(p);
                return result;
            }
            //return null;
        }


        [HttpPost("[action]")]
        public void Create([FromBody]Product item)
        {
            try
            {
                ProductMgr mgr = new ProductMgr(_context);
                mgr.Create(item);
              
            }
            catch (Exception ex)
            {

            }
          
        }

        [HttpPost("[action]")]
        public void Update([FromBody]Product item)
        {
            try
            {
                ProductMgr mgr = new ProductMgr(_context);
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
                ProductMgr mgr = new ProductMgr(_context);
                mgr.Remove(id);

            }
            catch (Exception ex)
            {

            }
            
        }
    }
}
