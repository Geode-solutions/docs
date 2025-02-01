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

# class BackgroundLineBuilder


```cpp
Inherits from OpenGeodeEdgedCurveBuilder1D, ElementSearchBuilder<EdgedCurve1D>, MacroInfoBuilder1D
```



## Functions

### BackgroundLineBuilder

```cpp
public void BackgroundLineBuilder(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### BackgroundLineBuilder

```cpp
public void BackgroundLineBuilder(BackgroundLine & background)
```


### ~BackgroundLineBuilder

```cpp
public void ~BackgroundLineBuilder()
```


### copy

```cpp
public void copy(const BackgroundLine & source)
```




