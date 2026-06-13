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

# struct GeographicCoordinateSystemInfo


## Members

```cpp
public basic_string authority

```

```cpp
public basic_string code

```

```cpp
public basic_string name

```



## Functions

### GeographicCoordinateSystemInfo

```cpp
public void GeographicCoordinateSystemInfo(std::string authority_in, std::string code_in, std::string name_in)
```


### GeographicCoordinateSystemInfo

```cpp
public void GeographicCoordinateSystemInfo()
```


### ~GeographicCoordinateSystemInfo

```cpp
public void ~GeographicCoordinateSystemInfo()
```


### authority_code

```cpp
public std::string authority_code()
```


### string

```cpp
public std::string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




