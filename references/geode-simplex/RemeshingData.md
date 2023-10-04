# class RemeshingData

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#289
```

# class RemeshingData

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#290
```

# class RemeshingData

```cpp
Defined at ../../include/geode/simplex/private/core/remeshing_data.h#30
```

 Structure holding all the data required for the remeshing algorithm Aliases are defined for BRep and Section.



## Functions

### RemeshingData

```cpp
public void RemeshingData<DataModel>(Model && background, Model & output, const Metric<dimension> & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#204
```

### RemeshingData

```cpp
public void RemeshingData<DataModel>(Model && background, Model & output, const Metric<dimension> & metric, const absl::flat_hash_map<ComponentType, std::vector<uuid> > & components_to_remesh)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#211
```

### ~RemeshingData

```cpp
public void ~RemeshingData<DataModel>()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#221
```

### background

```cpp
public const Model & background()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#226
```

### background_builder

```cpp
public Builder & background_builder()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#232
```

### background_modifier

```cpp
public Modifier & background_modifier()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#238
```

### output

```cpp
public const Model & output()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#244
```

### output_builder

```cpp
public Builder & output_builder()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#250
```

### output_modifier

```cpp
public Modifier & output_modifier()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#256
```

### metric

```cpp
public const Metric<dimension> & metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#262
```

### output_mapping

```cpp
public ModelCopyMapping && output_mapping()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#269
```

### output_id

```cpp
public const uuid & output_id(const ComponentID & component)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#275
```

### from_output_id

```cpp
public const uuid & from_output_id(const ComponentID & component)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/remeshing_data.cpp#282
```

### RemeshingData

```cpp
public void RemeshingData<DataModel>(Model && background, Model & output, const Metric<dimension> & metric, const int & components_to_remesh)
```



