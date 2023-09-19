package com.example.cinetec.adminMovie;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.example.cinetec.R;
import com.example.cinetec.confirmView;

public class consultMovie extends AppCompatActivity {
    EditText OgName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_consult_movie);
        OgName = findViewById(R.id.OgName);

    }

    public void onClickConsult(View view) {
        String Name1 = OgName.getText().toString();
        if (Name1.isEmpty()){
            OgName.setError("Este campo no puede estar vacio");
            return;
        }
        Intent intent = new Intent(this, confirmView.class);
        startActivity(intent);
    }

    public void onClickBack(View view) {
        Intent intent = new Intent(this, AdminMovie.class);
        startActivity(intent);
    }
}