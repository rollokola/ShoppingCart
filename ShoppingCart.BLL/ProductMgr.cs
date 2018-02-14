using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShoppingCart.Contract.Generated;
using ShoppingCart.DAL;

namespace ShoppingCart.BLL
{
    public class ProductMgr
    {
        private ShoppingCartEntities _context;
        public ProductMgr(ShoppingCart.DAL.ShoppingCartEntities context)
        {
            _context = context;

        }
        public List<Product> GetAll()
        {
            List<Product> result = null;
         
            result = _context.Product.ToList();

            return result;
        }


        public Product Get(int id)
        {
            Product result = null;
            result = _context.Product.FirstOrDefault();

            return result;
        }

        public void Create(Product item)
        {
            _context.Product.Add(item);
            _context.SaveChanges();
        }

        public void Update(Product item)
        {
            var dbItem = _context.Product.SingleOrDefault(x => x.Id == item.Id);
            dbItem.Name = item.Name;
            dbItem.Price = item.Price;
            dbItem.Barcode = item.Barcode;
            
            _context.SaveChanges();
        }

        public void Remove(int id)
        {
            var post = _context.Product.SingleOrDefault(x => x.Id == id);
            _context.Product.Remove(post);
            _context.SaveChanges();
        }

    }
}
