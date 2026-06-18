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

# class OpenGeodeEdgedCurveBuilder


 Implementation class for EdgedCurveBuilder using OpenGeode data structure



```cpp
Inherits from EdgedCurveBuilder<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### OpenGeodeEdgedCurveBuilder

```cpp
public void OpenGeodeEdgedCurveBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeEdgedCurveBuilder

```cpp
public void OpenGeodeEdgedCurveBuilder<dimension>(OpenGeodeEdgedCurve<dimension> & mesh)
```


### OpenGeodeEdgedCurveBuilder

```cpp
public void OpenGeodeEdgedCurveBuilder<dimension>(OpenGeodeEdgedCurveBuilder<dimension> && )
```




# class OpenGeodeEdgedCurveBuilder


```cpp
Inherits from EdgedCurveBuilder<3U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodeEdgedCurveBuilder


```cpp
Inherits from EdgedCurveBuilder<1U>
```



## Members

```cpp
public static const auto dim

```



# class OpenGeodeEdgedCurveBuilder


```cpp
Inherits from EdgedCurveBuilder<2U>
```



## Members

```cpp
public static const auto dim

```



