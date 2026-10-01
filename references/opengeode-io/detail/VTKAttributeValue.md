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

# struct VTKAttributeValue


## Members

```cpp
public static const local_index_t nb_components

```



## Functions

### component

```cpp
public static Stored component(const Point<dimension> & value, local_index_t c)
```




# struct VTKAttributeValue


## Members

```cpp
public static const local_index_t nb_components

```



## Functions

### component

```cpp
public static Stored component(const Vector<dimension> & value, local_index_t c)
```




# struct VTKAttributeValue


## Members

```cpp
public static const local_index_t nb_components

```



## Functions

### component

```cpp
public static Stored component(const Value & value, local_index_t )
```




# struct VTKAttributeValue


## Members

```cpp
public static const local_index_t nb_components

```



## Functions

### component

```cpp
public static Stored component(const std::array<Value, size> & value, local_index_t c)
```




# struct VTKAttributeValue

