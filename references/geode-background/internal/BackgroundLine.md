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

# class BackgroundLine


```cpp
Inherits from OpenGeodeEdgedCurve1D, ElementSearch<EdgedCurve1D>, MacroInfo1D
```



## Functions

### BackgroundLine

```cpp
public void BackgroundLine()
```


### BackgroundLine

```cpp
public void BackgroundLine(EdgedCurve1D && line)
```


### BackgroundLine

```cpp
public void BackgroundLine(BackgroundLine && other)
```


### ~BackgroundLine

```cpp
public void ~BackgroundLine()
```


### impl_name_static

```cpp
public NamedType impl_name_static()
```


### impl_name

```cpp
public NamedType impl_name()
```


### clone

```cpp
public BackgroundLine clone()
```


### clone_line

```cpp
public unique_ptr clone_line()
```


### release_line

```cpp
public OpenGeodeEdgedCurve release_line()
```




