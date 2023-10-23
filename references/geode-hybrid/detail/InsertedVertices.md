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

# class InsertedVertices


## Members

```cpp
public const Component & hybrid_component_

```

```cpp
public const typename Component::Mesh & hybrid_mesh_

```

```cpp
public const geode::BRep & model_

```

```cpp
public const Component & component_

```

```cpp
public const typename Component::Mesh & mesh_

```

```cpp
public int & unique_mapping_

```

```cpp
public int vertices_

```



## Functions

### InsertedVertices

```cpp
public void InsertedVertices<Component>(const InsertedVertices<Component> & )
```


### operator=

```cpp
public InsertedVertices<Component> & operator=(const InsertedVertices<Component> & )
```


### InsertedVertices

```cpp
public void InsertedVertices<Component>(InsertedVertices<Component> && )
```


### operator=

```cpp
public InsertedVertices<Component> & operator=(InsertedVertices<Component> && )
```


### InsertedVertices

```cpp
public void InsertedVertices<Component>(BRepHybridSamplingData & data, const Component & hybrid_component, const Component & component)
```


### ~InsertedVertices

```cpp
public void ~InsertedVertices<Component>()
```




