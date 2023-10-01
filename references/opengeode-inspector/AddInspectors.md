# class AddInspectors

```cpp
Defined at ../include/geode/inspector/mixin/add_inspectors.h#38
```

 This mixin represents an assembly of inspectors. Syntax to create a derivated class is class DerivateClass : public AddInspectors< dimension, Mesh, InspectorClassA, InspectorClassB, InspectorClassC >, public OtherOptionalMixins



```cpp
Inherits from Inspectors
```



## Functions

### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(const Mesh & mesh)
```

```cpp
Defined at ../include/geode/inspector/mixin/add_inspectors.h#41
```

### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(const Mesh & mesh, bool verbose)
```

```cpp
Defined at ../include/geode/inspector/mixin/add_inspectors.h#42
```

### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(AddInspectors<Mesh, Inspectors...> && )
```

```cpp
Defined at ../include/geode/inspector/mixin/add_inspectors.h#46
```



