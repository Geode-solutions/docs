<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Vector<dimension> & vector)
```


### converted_item_value

```cpp
public float converted_item_value(const Vector<dimension> & vector, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const bool & value)
```


### converted_item_value

```cpp
public float converted_item_value(const bool & value, local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Container & value)
```


### converted_item_value

```cpp
public float converted_item_value(const Container & value, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const RGBColor & color)
```


### converted_item_value

```cpp
public float converted_item_value(const RGBColor & color, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const unsigned int & value)
```


### converted_item_value

```cpp
public float converted_item_value(const unsigned int & value, local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const double & value)
```


### converted_item_value

```cpp
public float converted_item_value(const double & value, local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const int & value)
```


### converted_item_value

```cpp
public float converted_item_value(const int & value, local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Container & value)
```


### converted_item_value

```cpp
public float converted_item_value(const Container & value, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Container & value)
```


### converted_item_value

```cpp
public float converted_item_value(const Container & value, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const GreyscaleColor & color)
```


### converted_item_value

```cpp
public float converted_item_value(const GreyscaleColor & color, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


 Helper struct to convert an Attribute value to generic float. This struct may be customized for a given type. Example: template <> struct GenericAttributeConversion< MyType > {      static float converted_value( const MyType& value )      {          return value.get_a_float();      } };



## Functions

### converted_value

```cpp
public float converted_value(const AttributeType & )
```


### converted_item_value

```cpp
public float converted_item_value(const AttributeType & , local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Point<dimension> & point)
```


### converted_item_value

```cpp
public float converted_item_value(const Point<dimension> & point, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Container & value)
```


### converted_item_value

```cpp
public float converted_item_value(const Container & value, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const float & value)
```


### converted_item_value

```cpp
public float converted_item_value(const float & value, local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const local_index_t & value)
```


### converted_item_value

```cpp
public float converted_item_value(const local_index_t & value, local_index_t )
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public float converted_value(const Container & value)
```


### converted_item_value

```cpp
public float converted_item_value(const Container & value, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```




