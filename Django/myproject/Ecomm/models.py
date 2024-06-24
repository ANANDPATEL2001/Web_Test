from django.db import models

# Create your models here.
# Here. 'Product' is the name of the relation/Schema/Table for database
class Product(models.Model):
    product_id = models.AutoField
    # Here, 'Autofield' is used in order to increment the 'product_id' by each time
    product_name = models.CharField(max_length=30)
    # Below 'default' value is provided along with other options so that if new product feature is added, previous items must have this 'default' value/feature to avoid problem/'error'
    category = models.CharField(max_length=50, default='')
    subcategory = models.CharField(max_length=50, default='')
    price = models.IntegerField(default=0)
    image = models.ImageField(upload_to='ecomm/images',default='')
    desc = models.CharField(max_length=500)
    pub_date = models.DateField()


# This function is added to return 'product_name' instead of Product 'Object' in admin panel taking Product 'Object' as input
# This addition of the function does not require 'makemigrations' command as no changes are made to the db 
    def __str__(self):
        return self.product_name