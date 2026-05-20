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

# class OpenGeodeException


 OpenGeode exception class. Example:       throw OpenGeodeException{ "Error while loading the BRep" };

       try {          ...       }       catch( ... )       {           return geode_lippincott();       }



```cpp
Inherits from runtime_error
```



## Functions

### OpenGeodeException

```cpp
public void OpenGeodeException(OpenGeodeException && )
```


### operator=

```cpp
public OpenGeodeException & operator=(OpenGeodeException && )
```


### operator=

```cpp
public OpenGeodeException & operator=(const OpenGeodeException & )
```


### OpenGeodeException

```cpp
public void OpenGeodeException(const OpenGeodeException & )
```


### ~OpenGeodeException

```cpp
public void ~OpenGeodeException()
```


### type

```cpp
public TYPE type()
```


### type_name

```cpp
public basic_string_view type_name()
```


### project

```cpp
public basic_string_view project()
```


### library

```cpp
public basic_string_view library()
```


### data

```cpp
public const std::any & data()
```


### has_parent

```cpp
public bool has_parent()
```


### parent

```cpp
public const OpenGeodeException & parent()
```


### set_parent

```cpp
public void set_parent(OpenGeodeException && parent)
```


### string

```cpp
public basic_string string()
```


### OpenGeodeException

```cpp
protected void OpenGeodeException(basic_string project, basic_string library, any data, TYPE type, const Args &... message)
```




## Enums

| enum class TYPE |

--

| data |
| internal |
| result |





