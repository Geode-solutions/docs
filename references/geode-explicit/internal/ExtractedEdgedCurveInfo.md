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

# struct ExtractedEdgedCurveInfo


```cpp
Inherits from ExtractedMeshInfo<EdgedCurve3D>
```



## Members

```cpp
public shared_ptr component_edges

```

```cpp
public static const auto COMPONENT_EDGES_ATTRIBUTE_NAME

```

```cpp
public static const auto VERTEX_INCIDENT_COMPONENT_FACETS_ATTRIBUTE_NAME

```



## Functions

### ExtractedEdgedCurveInfo

```cpp
public void ExtractedEdgedCurveInfo()
```


### ExtractedEdgedCurveInfo

```cpp
public void ExtractedEdgedCurveInfo(ExtractedEdgedCurveInfo && )
```


### operator=

```cpp
public ExtractedEdgedCurveInfo & operator=(ExtractedEdgedCurveInfo && )
```


### ~ExtractedEdgedCurveInfo

```cpp
public void ~ExtractedEdgedCurveInfo()
```




