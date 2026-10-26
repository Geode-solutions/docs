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

# class GDALErrorScope


 While alive, GDAL warnings are logged and GDAL errors are not printed: they should be reported with last_error()



## Functions

### GDALErrorScope

```cpp
public void GDALErrorScope()
```


### GDALErrorScope

```cpp
public void GDALErrorScope(const GDALErrorScope & )
```


### operator=

```cpp
public GDALErrorScope & operator=(const GDALErrorScope & )
```


### GDALErrorScope

```cpp
public void GDALErrorScope(GDALErrorScope && )
```


### operator=

```cpp
public GDALErrorScope & operator=(GDALErrorScope && )
```


### ~GDALErrorScope

```cpp
public void ~GDALErrorScope()
```


### last_error

```cpp
public std::string last_error()
```




