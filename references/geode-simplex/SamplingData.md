# class SamplingData

```cpp
Defined at ../../include/geode/simplex/private/core/sampling_data.h#38
```

 Structure holding all the data required for the remeshing algorithm Aliases are defined for BRep and Section.



## Records

Impl



## Functions

### SamplingData

```cpp
public void SamplingData<DataModel>(DataModel & model, const Metric<dimension> & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#264
```

### ~SamplingData

```cpp
public void ~SamplingData<DataModel>()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#271
```

### model

```cpp
public const Model & model()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#276
```

### builder

```cpp
public Builder & builder()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#282
```

### modifier

```cpp
public Modifier & modifier()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#288
```

### metric

```cpp
public const Metric<dimension> & metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#294
```

### mutex

```cpp
public std::mutex & mutex()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#300
```

### tag_unique_vertices

```cpp
public void tag_unique_vertices(absl::Span<const index_t> unique_vertices)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#306
```

### clean_model

```cpp
public CleanMappings clean_model()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#327
```

### release_model

```cpp
public DataModel release_model()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#333
```

### updated_triangles

```cpp
public vector updated_triangles(const Surface<dimension> & surface, index_t triangle)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#313
```

### updated_tetrahedra

```cpp
public vector updated_tetrahedra(const Block<dimension> & block, index_t tetrahedron)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/core/sampling_data.cpp#320
```



# class SamplingData

