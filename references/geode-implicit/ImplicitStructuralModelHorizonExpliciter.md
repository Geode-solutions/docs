# class ImplicitStructuralModelHorizonExpliciter

```cpp
Defined at ../include/geode/implicit/explicitation/implicit_model_horizon_expliciter.h#23
```

## Functions

### ImplicitStructuralModelHorizonExpliciter

```cpp
public void ImplicitStructuralModelHorizonExpliciter(const ImplicitStructuralModel & model)
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/implicit_model_horizon_expliciter.cpp#622
```

### ~ImplicitStructuralModelHorizonExpliciter

```cpp
public void ~ImplicitStructuralModelHorizonExpliciter()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/implicit_model_horizon_expliciter.cpp#629
```

### explicit_horizon

```cpp
public void explicit_horizon(const Horizon3D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/implicit_model_horizon_expliciter.cpp#634
```

### explicit_all_horizons

```cpp
public void explicit_all_horizons()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/implicit_model_horizon_expliciter.cpp#640
```

### build

```cpp
public tuple build()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/implicit_model_horizon_expliciter.cpp#645
```

 Returns a new ImplicitStructuralModel with all the given horizons inserted as surfaces and the topology rebuilt. Also gives the "input to output" and "output to input" mappings between given and new implicit model. Only the attributes marked as interpolable will be interpolated along the inserted surfaces.



