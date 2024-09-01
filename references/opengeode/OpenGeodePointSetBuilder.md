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

# class OpenGeodePointSetBuilder


 Implementation class for PointSetBuilder using OpenGeode data structure



```cpp
Inherits from PointSetBuilder<dimension>
```



## Functions

### OpenGeodePointSetBuilder

```cpp
public void OpenGeodePointSetBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodePointSetBuilder

```cpp
public void OpenGeodePointSetBuilder<dimension>(OpenGeodePointSet<dimension> & mesh)
```




# class OpenGeodePointSetBuilder


```cpp
Inherits from PointSetBuilder<2U>
```



# class OpenGeodePointSetBuilder


```cpp
Inherits from PointSetBuilder<3U>
```



