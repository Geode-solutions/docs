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

# class CutAlongInternalLines

# class CutAlongInternalLines

# class CutAlongInternalLines


## Functions

### CutAlongInternalLines

```cpp
public void CutAlongInternalLines<Model>(Model & model)
```


### CutAlongInternalLines

```cpp
public void CutAlongInternalLines<Model>(const Model & model, typename Model::Builder & builder)
```


### ~CutAlongInternalLines

```cpp
public void ~CutAlongInternalLines<Model>()
```


### cut_all_surfaces

```cpp
public vector cut_all_surfaces()
```


### cut_surface

```cpp
public vector cut_surface(const Surface<Model::dim> & surface)
```




