using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShoppingCart.Contract.Generated;
using ShoppingCart.DAL;

namespace ShoppingCart.BLL
{
    public class ShoppingListMgr
    {
        private ShoppingCartEntities _context;
        public ShoppingListMgr(ShoppingCart.DAL.ShoppingCartEntities context)
        {
            _context = context;

        }
        public void RemoveAll()
        {
            

            var items =  _context.ShoppingList;
            _context.ShoppingList.RemoveRange(items);
            _context.SaveChanges();

        }

        public IEnumerable<ShoppingList> GetAll(int user)
        {
            List<ShoppingList> result = null;

            result = (from x in  _context.ShoppingList
                     where x.UserId == user
                     select x).ToList();

            return result;
        }


        public void Create(ShoppingList item)
        {
            _context.ShoppingList.Add(item);
            _context.SaveChanges();
        }

        public void Remove(int id)
        {
            var post = _context.ShoppingList.SingleOrDefault(x => x.Id == id);
            _context.ShoppingList.Remove(post);
            _context.SaveChanges();
        }


        public void Update(ShoppingList item)
        {
            var dbItem = _context.ShoppingList.SingleOrDefault(x => x.Id == item.Id);
            dbItem.Name = item.Name;
            dbItem.UserId = item.UserId;
           

            _context.SaveChanges();
        }

    }
}
