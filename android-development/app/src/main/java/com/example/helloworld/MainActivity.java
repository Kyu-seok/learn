package com.example.helloworld;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


    }

    public void onBtnClick (View view) {
        TextView txtFirstName = findViewById(R.id.txtFirstName);
        EditText edtFirstName = findViewById(R.id.edtTxtFirstName);
        txtFirstName.setText("First Name: " + edtFirstName.getText().toString());

        TextView txtLastName = findViewById(R.id.txtLastName);
        EditText edtLastName = findViewById(R.id.edtTxtLastName);
        txtLastName.setText("Last Name: " + edtLastName.getText().toString());

        TextView txtEmail = findViewById(R.id.txtEmail);
        EditText edtTxtName = findViewById(R.id.edtTxtEmail);
        txtEmail.setText("email: "+edtTxtName.getText().toString());
    }
}