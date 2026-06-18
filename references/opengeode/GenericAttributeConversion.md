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
public static float converted_value(const Vector<dimension> & vector)
```


### converted_item_value

```cpp
public static float converted_item_value(const Vector<dimension> & vector, local_index_t item)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const bool & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const bool & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const unsigned short & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const unsigned short & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const Container & value, local_index_t item)
```


### converted_value

```cpp
public static float converted_value(const Container & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public static float converted_value(const RGBColor & color)
```


### converted_item_value

```cpp
public static float converted_item_value(const RGBColor & color, local_index_t item)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const unsigned int & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const unsigned int & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const double & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const double & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const int & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const int & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const signed char & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const signed char & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const Container & value, local_index_t item)
```


### converted_value

```cpp
public static float converted_value(const Container & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const Container & value, local_index_t item)
```


### converted_value

```cpp
public static float converted_value(const Container & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public static float converted_value(const GreyscaleColor & color)
```


### converted_item_value

```cpp
public static float converted_item_value(const GreyscaleColor & color, local_index_t item)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


 Helper struct to convert an Attribute value to generic float. This struct may be customized for a given type. Example: template <> struct GenericAttributeConversion< MyType > {      static float converted_value( const MyType& value )      {          return value.get_a_float();      } };



## Functions

### converted_value

```cpp
public static float converted_value(const AttributeType & )
```


### converted_item_value

```cpp
public static float converted_item_value(const AttributeType & , local_index_t )
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_value

```cpp
public static float converted_value(const Point<dimension> & point)
```


### converted_item_value

```cpp
public static float converted_item_value(const Point<dimension> & point, local_index_t item)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const Container & value, local_index_t item)
```


### converted_value

```cpp
public static float converted_value(const Container & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const float & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const float & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const unsigned char & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const unsigned char & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const Container & value, local_index_t item)
```


### converted_value

```cpp
public static float converted_value(const Container & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




# struct GenericAttributeConversion


## Functions

### converted_item_value

```cpp
public static float converted_item_value(const short & value, local_index_t )
```


### converted_value

```cpp
public static float converted_value(const short & value)
```


### is_genericable

```cpp
public static bool is_genericable()
```


### nb_items

```cpp
public static local_index_t nb_items()
```




