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

# struct BRepRemeshValidity


## Members

```cpp
public ElementsIntersectionsInspectionResult meshes_intersections

```

```cpp
public BRepMeshesManifoldInspectionResult meshes_non_manifolds

```

```cpp
public BRepMeshesDegenerationInspectionResult mesh_degenerations

```

```cpp
public BRepTopologyInspectionResult topology_issues

```



## Functions

### BRepRemeshValidity

```cpp
public void BRepRemeshValidity(const ElementsIntersectionsInspectionResult & meshes_intersections_in, const BRepMeshesManifoldInspectionResult & meshes_non_manifolds_in, const BRepMeshesDegenerationInspectionResult & mesh_degenerations_in, const BRepTopologyInspectionResult & topology_issues_in)
```


### string

```cpp
public basic_string string()
```


### operator bool

```cpp
public bool operator bool()
```




