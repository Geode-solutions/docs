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

# class OpenGeodeRegularGridBuilder

# class OpenGeodeRegularGridBuilder


 Implementation class for RegularGridBuilder using OpenGeode data structure



```cpp
Inherits from RegularGridBuilder<2>
```



## Functions

### OpenGeodeRegularGridBuilder

```cpp
public void OpenGeodeRegularGridBuilder(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeRegularGridBuilder

```cpp
public void OpenGeodeRegularGridBuilder(OpenGeodeRegularGrid<2> & mesh)
```


### OpenGeodeRegularGridBuilder

```cpp
public void OpenGeodeRegularGridBuilder(OpenGeodeRegularGridBuilder<2> && )
```




# class OpenGeodeRegularGridBuilder


 Implementation class for RegularGridBuilder using OpenGeode data structure



```cpp
Inherits from RegularGridBuilder<3>
```



## Functions

### OpenGeodeRegularGridBuilder

```cpp
public void OpenGeodeRegularGridBuilder(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeRegularGridBuilder

```cpp
public void OpenGeodeRegularGridBuilder(OpenGeodeRegularGrid<3> & mesh)
```


### OpenGeodeRegularGridBuilder

```cpp
public void OpenGeodeRegularGridBuilder(OpenGeodeRegularGridBuilder<3> && )
```




