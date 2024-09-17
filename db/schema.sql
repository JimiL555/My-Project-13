-- Create Category Table
CREATE TABLE category (
  id SERIAL PRIMARY KEY,       -- Auto-incremented primary key
  category_name VARCHAR(255) NOT NULL -- The name of the category, must not be null
);

-- Create Product Table
CREATE TABLE product (
  id SERIAL PRIMARY KEY,       -- Auto-incremented primary key
  product_name VARCHAR(255) NOT NULL, -- Product name, must not be null
  price DECIMAL NOT NULL,      -- Product price, must be a decimal and not null
  stock INT DEFAULT 10,        -- Stock count, default value is 10
  category_id INT,             -- Foreign key referencing Category
  FOREIGN KEY (category_id) REFERENCES category(id)
);

-- Create Tag Table
CREATE TABLE tag (
  id SERIAL PRIMARY KEY,       -- Auto-incremented primary key
  tag_name VARCHAR(255)        -- The name of the tag, can be null
);

-- Create ProductTag Table (for many-to-many relationship between products and tags)
CREATE TABLE product_tag (
  id SERIAL PRIMARY KEY,       -- Auto-incremented primary key
  product_id INT,              -- Foreign key referencing Product
  tag_id INT,                  -- Foreign key referencing Tag
  FOREIGN KEY (product_id) REFERENCES product(id),
  FOREIGN KEY (tag_id) REFERENCES tag(id)
);