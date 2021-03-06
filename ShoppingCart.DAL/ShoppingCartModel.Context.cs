﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShoppingCart.DAL
{
    using System;
    //using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using ShoppingCart.Contract.Generated;
    using Microsoft.EntityFrameworkCore;

    public partial class ShoppingCartEntities : DbContext
    {
        public ShoppingCartEntities(DbContextOptions<ShoppingCartEntities> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           // modelBuilder.Entity<Report>().Ignore(x => x.SeeInPercent);
            //modelBuilder.Entity<Report>().Ignore(x => x.Week);
            //modelBuilder.Entity<Report>().Ignore(x => x.Weekday);
            base.OnModelCreating(modelBuilder);
        }
    
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductGroup> ProductGroup { get; set; }
        public virtual DbSet<ShoppingList> ShoppingList { get; set; }
        public virtual DbSet<ShoppingListItem> ShoppingListItem { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(
                    @"Server = localhost\WEBFACTORY2010; Database = ShoppingCart; Trusted_Connection = True; ");
            }

        }
    }
}
