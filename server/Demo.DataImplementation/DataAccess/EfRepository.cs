﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Demo.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Demo.DataImplementation.DataAccess
{
    public class EfRepository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext _dbContext;

        public EfRepository(ApplicationDbContext dbContext)
        {
            if (_dbContext == null)
                _dbContext = dbContext;
        }

        public async Task<T> GetById(Guid id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public IQueryable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            IQueryable<T> query = _dbContext.Set<T>().Where(predicate);
            return query;
        }

        public async Task<List<T>> List()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public T Add(T entity)
        {
            _dbContext.Set<T>().Add(entity);

            return entity;
        }

        public void Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
        }

        public IQueryable<T> All()
        {
            return _dbContext.Set<T>().AsQueryable();
        }
    }
}
