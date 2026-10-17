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


### type

```cpp
public TYPE type()
```


### project

```cpp
public std::string_view project()
```


### ~OpenGeodeException

```cpp
public void ~OpenGeodeException()
```


### library

```cpp
public std::string_view library()
```


### type_name

```cpp
public std::string_view type_name()
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


### string

```cpp
public std::string string()
```


### set_parent

```cpp
public void set_parent(OpenGeodeException && parent)
```


### OpenGeodeException

```cpp
protected void OpenGeodeException(std::string project, std::string library, std::any data, TYPE type, const Args &... message)
```




## Enums

| enum class TYPE |

--

| data |
| internal |
| result |





